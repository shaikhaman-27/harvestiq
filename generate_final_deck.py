import os
import sys
import pptx
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

INPUT_PPTX = "SIH2026-IDEA-Presentation-Format.pptx"
OUTPUT_PPTX = "SIH_26005_Smart_Solar_Cold_Storage_FINAL.pptx"
HERO_IMG = "hero_cold_storage.jpg"

# Color Palette
NAVY_HEADER   = RGBColor(15, 23, 42)      # #0F172A
NAVY_TEXT     = RGBColor(30, 41, 59)      # #1E293B
BLUE_SIH      = RGBColor(0, 112, 192)     # #0070C0
BLUE_DARK     = RGBColor(2, 132, 199)     # #0284C7
BLUE_LIGHT    = RGBColor(239, 246, 255)   # #EFF6FF
BLUE_BORDER   = RGBColor(186, 230, 253)   # #BAE6FD
GREEN_DARK    = RGBColor(22, 101, 52)     # #166534
GREEN_LIGHT   = RGBColor(240, 253, 244)   # #F0FDF4
GREEN_BORDER  = RGBColor(134, 239, 172)   # #86EFAC
AMBER_DARK    = RGBColor(180, 83, 9)      # #B45309
AMBER_LIGHT   = RGBColor(254, 243, 199)   # #FEF3C7
AMBER_BORDER  = RGBColor(252, 211, 77)    # #FCD34D
RED_DARK      = RGBColor(185, 28, 28)     # #B91C1C
RED_LIGHT     = RGBColor(254, 242, 242)   # #FEF2F2
RED_BORDER    = RGBColor(252, 165, 165)   # #FCA5A5
PURPLE_DARK   = RGBColor(109, 40, 217)    # #6D28D9
PURPLE_LIGHT  = RGBColor(245, 243, 255)   # #F5F3FF
PURPLE_BORDER = RGBColor(221, 214, 254)   # #DDD6FE

WHITE         = RGBColor(255, 255, 255)
CARD_BG_MUTED = RGBColor(248, 250, 252)   # #F8FAFC
BORDER_MUTED  = RGBColor(203, 213, 225)   # #CBD5E1
BORDER_LIGHT  = RGBColor(226, 232, 240)   # #E2E8F0
TEXT_DARK     = RGBColor(15, 23, 42)      # #0F172A
TEXT_BODY     = RGBColor(51, 65, 85)      # #334155
TEXT_MUTED    = RGBColor(100, 116, 139)   # #64748B

FONT_HEAD = "Segoe UI"
FONT_BODY = "Arial"

def add_card(slide, left, top, width, height, bg_color=WHITE, border_color=BORDER_MUTED, border_width=1, shape_type=MSO_SHAPE.ROUNDED_RECTANGLE):
    card = slide.shapes.add_shape(shape_type, left, top, width, height)
    card.fill.solid()
    card.fill.fore_color.rgb = bg_color
    if border_color:
        card.line.color.rgb = border_color
        card.line.width = Pt(border_width)
    else:
        card.line.fill.background()
    return card

def add_rect(slide, left, top, width, height, bg_color=WHITE, border_color=BORDER_MUTED, border_width=1):
    return add_card(slide, left, top, width, height, bg_color, border_color, border_width, MSO_SHAPE.RECTANGLE)

def add_badge(slide, left, top, width, height, text, bg_color=BLUE_SIH, text_color=WHITE, font_size=8.5, bold=True, shape_type=MSO_SHAPE.ROUNDED_RECTANGLE):
    badge = slide.shapes.add_shape(shape_type, left, top, width, height)
    badge.fill.solid()
    badge.fill.fore_color.rgb = bg_color
    badge.line.fill.background()
    tf = badge.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = Inches(0.02)
    p = tf.paragraphs[0]
    p.text = text
    p.font.name = FONT_HEAD
    p.font.size = Pt(font_size)
    p.font.bold = bold
    p.font.color.rgb = text_color
    p.alignment = PP_ALIGN.CENTER
    return badge

def add_textbox(slide, left, top, width, height, margin=0.03):
    tb = slide.shapes.add_textbox(left, top, width, height)
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = Inches(margin)
    return tb

def setup_header(slide, title_text, subtitle_text):
    for s in slide.shapes:
        if s.name == "Title 1" and s.has_text_frame:
            s.left = Inches(1.80)
            s.top = Inches(0.08)
            s.width = Inches(8.80)
            s.height = Inches(0.48)
            tf = s.text_frame
            tf.word_wrap = True
            p = tf.paragraphs[0]
            p.text = title_text
            p.font.name = FONT_HEAD
            p.font.size = Pt(20)
            p.font.bold = True
            p.font.color.rgb = NAVY_HEADER
            p.alignment = PP_ALIGN.LEFT
    
    tb_sub = add_textbox(slide, Inches(1.80), Inches(0.56), Inches(8.80), Inches(0.32), margin=0.01)
    p2 = tb_sub.text_frame.paragraphs[0]
    p2.text = subtitle_text
    p2.font.name = FONT_HEAD
    p2.font.size = Pt(9.5)
    p2.font.bold = True
    p2.font.color.rgb = BLUE_DARK

def format_team_oval_and_footers(slide):
    for s in slide.shapes:
        if "Oval" in s.name and s.has_text_frame:
            s.left = Inches(0.35)
            s.top = Inches(0.12)
            s.width = Inches(1.30)
            s.height = Inches(0.65)
            s.fill.solid()
            s.fill.fore_color.rgb = BLUE_SIH
            s.line.fill.background()
            for p in s.text_frame.paragraphs:
                p.text = "HarvestIQ"
                p.font.name = FONT_HEAD
                p.font.size = Pt(11)
                p.font.bold = True
                p.font.color.rgb = WHITE
                p.alignment = PP_ALIGN.CENTER
        if "Footer Placeholder" in s.name and s.has_text_frame:
            for p in s.text_frame.paragraphs:
                p.font.name = FONT_BODY
                p.font.size = Pt(9)
                p.font.color.rgb = WHITE
        if "Slide Number" in s.name and s.has_text_frame:
            for p in s.text_frame.paragraphs:
                p.font.name = FONT_BODY
                p.font.size = Pt(10)
                p.font.bold = True
                p.font.color.rgb = WHITE

def clear_old_placeholders(slide):
    for s in list(slide.shapes):
        if s.has_text_frame:
            txt = s.text_frame.text.lower()
            if "proposed solution (describe" in txt or "technologies to be used" in txt or \
               "analysis of the feasibility" in txt or "potential impact on the target" in txt or \
               "details / links of the reference" in txt:
                sp = s._element
                sp.getparent().remove(sp)

print("Helper setup complete")
def build_slide_1(slide):
    print("Building Slide 1: Title + Problem & Opportunity Infographic...")
    # Clean up old placeholders
    for s in list(slide.shapes):
        if s.name in ["Picture 4", "Freeform: Shape 26", "Rectangle 24"]:
            sp = s._element
            sp.getparent().remove(sp)
        elif s.name in ["Subtitle 3", "Title 7", "TextBox 9"] and s.has_text_frame:
            s.text_frame.text = ""
            
    # Top Header Zone
    add_badge(slide, Inches(0.50), Inches(0.20), Inches(3.20), Inches(0.28), 
              "SMART INDIA HACKATHON 2026", BLUE_SIH, WHITE, font_size=9.5, bold=True)
    
    tb_title = add_textbox(slide, Inches(0.50), Inches(0.52), Inches(9.80), Inches(0.48), margin=0.01)
    p_t = tb_title.text_frame.paragraphs[0]
    p_t.text = "HARVESTIQ — Intelligent Solar Cold Storage"
    p_t.font.name = FONT_HEAD
    p_t.font.size = Pt(22)
    p_t.font.bold = True
    p_t.font.color.rgb = NAVY_HEADER
    
    tb_sub = add_textbox(slide, Inches(0.50), Inches(1.00), Inches(9.80), Inches(0.28), margin=0.01)
    p_s = tb_sub.text_frame.paragraphs[0]
    p_s.text = "Decentralized Solar Preservation & Last-Mile Cold-Chain Technology for Smallholder Farmers"
    p_s.font.name = FONT_HEAD
    p_s.font.size = Pt(10)
    p_s.font.bold = True
    p_s.font.color.rgb = BLUE_DARK

    # LEFT COLUMN: Official Submission Details & Core Positioning (Width 5.30")
    add_card(slide, Inches(0.50), Inches(1.35), Inches(5.30), Inches(5.35), bg_color=WHITE, border_color=BLUE_BORDER, border_width=1.2)
    add_badge(slide, Inches(0.65), Inches(1.48), Inches(3.00), Inches(0.28), 
              "OFFICIAL SUBMISSION DETAILS", BLUE_SIH, WHITE, font_size=8.5, bold=True)
    
    meta_rows = [
        ("Problem Statement ID:", "26005", BLUE_SIH, True),
        ("Problem Statement Title:", "Solar-Powered Smart Mini Cold Storage System for Fresh Vegetables in North Eastern Region (NER)", NAVY_TEXT, False),
        ("Theme:", "Agriculture, FoodTech & Rural Development", GREEN_DARK, True),
        ("PS Category:", "Hardware", NAVY_TEXT, True),
        ("Team Name:", "HarvestIQ", BLUE_DARK, True),
        ("Team ID:", "[Registered on Portal]", TEXT_MUTED, False),
    ]
    
    y_m = 1.88
    for label, val, color, is_bold in meta_rows:
        tb = add_textbox(slide, Inches(0.65), Inches(y_m), Inches(5.00), Inches(0.48 if len(val) > 40 else 0.32), margin=0.01)
        p = tb.text_frame.paragraphs[0]
        r1 = p.add_run()
        r1.text = label + " "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(8.5)
        r1.font.bold = True
        r1.font.color.rgb = NAVY_HEADER
        
        r2 = p.add_run()
        r2.text = val
        r2.font.name = FONT_BODY
        r2.font.size = Pt(8.5)
        r2.font.bold = is_bold
        r2.font.color.rgb = color
        y_m += 0.52 if len(val) > 40 else 0.36
        
    # Project Identity & Positioning Box
    add_card(slide, Inches(0.65), Inches(4.30), Inches(5.00), Inches(2.25), bg_color=BLUE_LIGHT, border_color=BLUE_BORDER, border_width=1.0)
    tb_pos_h = add_textbox(slide, Inches(0.80), Inches(4.38), Inches(4.70), Inches(0.24), margin=0.01)
    p_ph = tb_pos_h.text_frame.paragraphs[0]
    p_ph.text = "PROJECT POSITIONING & ARCHITECTURE"
    p_ph.font.name = FONT_HEAD
    p_ph.font.size = Pt(8.5)
    p_ph.font.bold = True
    p_ph.font.color.rgb = BLUE_DARK
    
    tb_pos_t = add_textbox(slide, Inches(0.80), Inches(4.64), Inches(4.70), Inches(1.80), margin=0.01)
    tf_pt = tb_pos_t.text_frame
    
    p1 = tf_pt.paragraphs[0]
    p1.text = "• Core Positioning: Bringing intelligent, solar-powered preservation closer to the farmer through a compact, modular and IoT-enabled system."
    p1.font.name = FONT_BODY
    p1.font.size = Pt(7.6)
    p1.font.color.rgb = NAVY_TEXT
    p1.space_after = Pt(3)
    
    p2 = tf_pt.add_paragraph()
    p2.text = "• Strategic Gap: Existing cold-storage systems address bulk storage. HarvestIQ focuses on the last-mile preservation gap between harvest and the larger cold chain."
    p2.font.name = FONT_BODY
    p2.font.size = Pt(7.6)
    p2.font.color.rgb = NAVY_TEXT
    p2.space_after = Pt(3)
    
    p3 = tf_pt.add_paragraph()
    p3.text = "• Prototype Tech: 20–40 L Chamber  •  100W Solar PV + LiFePO4 Battery  •  Peltier Thermoelectric Cooling  •  ESP32 Multi-Sensor Telemetry"
    p3.font.name = FONT_HEAD
    p3.font.size = Pt(7.6)
    p3.font.bold = True
    p3.font.color.rgb = GREEN_DARK

    # RIGHT COLUMN: Problem & Opportunity Infographic (Width 6.85")
    add_card(slide, Inches(5.95), Inches(1.35), Inches(6.85), Inches(5.35), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.2)
    add_badge(slide, Inches(6.15), Inches(1.48), Inches(3.40), Inches(0.28), 
              "PROBLEM & REGIONAL CHALLENGE (NER)", RED_DARK, WHITE, font_size=8.5, bold=True)
    
    tb_prob_sub = add_textbox(slide, Inches(6.15), Inches(1.82), Inches(6.45), Inches(0.24), margin=0.01)
    ppsub = tb_prob_sub.text_frame.paragraphs[0]
    ppsub.text = "The Northeast Perishable Value Chain Bottleneck (Root-Cause Chain):"
    ppsub.font.name = FONT_HEAD
    ppsub.font.size = Pt(8.5)
    ppsub.font.bold = True
    ppsub.font.color.rgb = NAVY_TEXT
    
    # 7-Step Problem Chain Flow
    chain_steps = [
        ("1. FRESH HARVEST", "Field picking"),
        ("2. HIGH PERISHABILITY", "Rapid decay"),
        ("3. NO LOCAL COLD CHAIN", "Decentralized gap"),
        ("4. POWER INTERRUPTIONS", "Grid deficit"),
        ("5. HILLY TRANSIT", "Slow connectivity"),
        ("6. FORCED EARLY SALE", "Buyer distress"),
        ("7. VALUE LOSS", "Income erosion")
    ]
    
    # Row 1 (4 steps)
    cx1 = 6.15
    for i in range(4):
        title, sub = chain_steps[i]
        add_badge(slide, Inches(cx1), Inches(2.10), Inches(1.35), Inches(0.52), f"{title}\n{sub}", 
                  RED_LIGHT, RED_DARK, font_size=7.0, bold=True)
        if i < 3:
            add_badge(slide, Inches(cx1 + 1.37), Inches(2.22), Inches(0.20), Inches(0.28), "➔", 
                      WHITE, RED_DARK, font_size=9.0, bold=True)
        cx1 += 1.62
        
    # Row 2 (3 steps)
    cx2 = 6.75
    add_badge(slide, Inches(6.25), Inches(2.80), Inches(0.40), Inches(0.28), "↳ ➔", 
              WHITE, RED_DARK, font_size=9.0, bold=True)
    for i in range(4, 7):
        title, sub = chain_steps[i]
        add_badge(slide, Inches(cx2), Inches(2.70), Inches(1.65), Inches(0.52), f"{title}\n{sub}", 
                  RED_LIGHT, RED_DARK, font_size=7.2, bold=True)
        if i < 6:
            add_badge(slide, Inches(cx2 + 1.68), Inches(2.82), Inches(0.22), Inches(0.28), "➔", 
                      WHITE, RED_DARK, font_size=9.0, bold=True)
        cx2 += 1.95

    # 4 Key Problem Realities (2x2 Grid)
    realities = [
        ("High Vegetable Perishability", 
         "Fresh vegetables respire rapidly after harvest. In warm, humid climates, loss of moisture and nutrient decay degrades marketable quality within 24–48 hours without immediate cooling.",
         AMBER_LIGHT, AMBER_DARK, AMBER_BORDER),
        ("Difficult NER Terrain & Transport", 
         "Hilly topography, scattered smallholdings, and vulnerable road networks severely delay farm-to-market transit, turning short distances into multi-day transit bottlenecks.",
         BLUE_LIGHT, BLUE_DARK, BLUE_BORDER),
        ("Unreliable Rural Grid Electricity", 
         "Remote rural and hilly farming pockets experience frequent power outages or complete off-grid conditions, making conventional AC compressor cold rooms unfeasible.",
         RED_LIGHT, RED_DARK, RED_BORDER),
        ("Distress Selling & Loss of Value", 
         "Lacking accessible decentralized cold storage close to the farm, smallholders are forced into immediate distress selling at buyer-dictated low prices to avoid complete spoilage.",
         PURPLE_LIGHT, PURPLE_DARK, PURPLE_BORDER)
    ]
    
    rc_coords = [
        (6.15, 3.32), (9.45, 3.32),
        (6.15, 4.46), (9.45, 4.46)
    ]
    
    for (rtitle, rdesc, rbg, rcolor, rborder), (rx, ry) in zip(realities, rc_coords):
        add_card(slide, Inches(rx), Inches(ry), Inches(3.20), Inches(1.06), bg_color=rbg, border_color=rborder, border_width=1.0)
        tb_r = add_textbox(slide, Inches(rx + 0.10), Inches(ry + 0.06), Inches(3.00), Inches(0.94), margin=0.01)
        tf_r = tb_r.text_frame
        
        pr1 = tf_r.paragraphs[0]
        pr1.text = "• " + rtitle
        pr1.font.name = FONT_HEAD
        pr1.font.size = Pt(8.2)
        pr1.font.bold = True
        pr1.font.color.rgb = rcolor
        pr1.space_after = Pt(2)
        
        pr2 = tf_r.add_paragraph()
        pr2.text = rdesc
        pr2.font.name = FONT_BODY
        pr2.font.size = Pt(7.2)
        pr2.font.color.rgb = TEXT_BODY
        
    # Bottom Core Objective Banner
    add_card(slide, Inches(6.15), Inches(5.62), Inches(6.50), Inches(0.92), bg_color=GREEN_LIGHT, border_color=GREEN_BORDER, border_width=1.2)
    tb_obj = add_textbox(slide, Inches(6.25), Inches(5.66), Inches(6.30), Inches(0.84), margin=0.01)
    tf_obj = tb_obj.text_frame
    
    po1 = tf_obj.paragraphs[0]
    po1.text = "CORE PROJECT OBJECTIVE"
    po1.font.name = FONT_HEAD
    po1.font.size = Pt(8.5)
    po1.font.bold = True
    po1.font.color.rgb = GREEN_DARK
    po1.alignment = PP_ALIGN.CENTER
    
    po2 = tf_obj.add_paragraph()
    po2.text = "“Preserve freshness closer to the farm and give farmers greater flexibility in when to sell.”"
    po2.font.name = FONT_HEAD
    po2.font.size = Pt(9.5)
    po2.font.bold = True
    po2.font.color.rgb = NAVY_HEADER
    po2.alignment = PP_ALIGN.CENTER
    
    po3 = tf_obj.add_paragraph()
    po3.text = "Visual Flow: Farmer  ➔  Fresh Harvest  ➔  Solar Energy  ➔  HarvestIQ Storage  ➔  Transport  ➔  Fair Market Value"
    po3.font.name = FONT_BODY
    po3.font.size = Pt(7.0)
    po3.font.bold = True
    po3.font.color.rgb = GREEN_DARK
    po3.alignment = PP_ALIGN.CENTER

def build_slide_2(slide):
    print("Building Slide 2: Proposed Solution + Innovation...")
    clear_old_placeholders(slide)
    format_team_oval_and_footers(slide)
    setup_header(slide, "HARVESTIQ — THE PROPOSED SOLUTION", 
                 "Decentralized, Solar-Powered Micro-Preservation Addressing the Last-Mile Cold Chain Gap")
    
    # TOP LEFT: 5 Product Concept Pillars (Width 7.30", Height 2.45")
    add_card(slide, Inches(0.50), Inches(1.18), Inches(7.30), Inches(2.45), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(0.65), Inches(1.26), Inches(3.20), Inches(0.24), 
              "PRODUCT CONCEPT & PROTOTYPE PILLARS", BLUE_SIH, WHITE, font_size=8.0, bold=True)
              
    pillars = [
        ("COMPACT", "20–40 L farm-level portable cold chamber designed for smallholder harvest batching.", BLUE_LIGHT, BLUE_DARK),
        ("SOLAR POWERED", "100W Solar PV + LiFePO4 battery backup for 100% off-grid reliability.", AMBER_LIGHT, AMBER_DARK),
        ("SMART CONTROL", "ESP32 microcontroller automating closed-loop cooling and thermal stability.", GREEN_LIGHT, GREEN_DARK),
        ("IoT MONITORING", "Multi-parameter telemetry: chamber temperature, humidity, door status & battery.", PURPLE_LIGHT, PURPLE_DARK),
        ("FARMER INTERFACE", "Simple local indicators, mobile dashboard alerts & proactive anomaly warnings.", BLUE_LIGHT, BLUE_DARK)
    ]
    
    y_pill = 1.56
    for title, desc, pbg, pcolor in pillars:
        add_badge(slide, Inches(0.65), Inches(y_pill), Inches(1.65), Inches(0.32), title, pbg, pcolor, font_size=7.5, bold=True)
        tb = add_textbox(slide, Inches(2.35), Inches(y_pill), Inches(5.30), Inches(0.32), margin=0.01)
        p = tb.text_frame.paragraphs[0]
        p.text = desc
        p.font.name = FONT_BODY
        p.font.size = Pt(8.0)
        p.font.color.rgb = TEXT_BODY
        y_pill += 0.36
        
    tb_tech_note = add_textbox(slide, Inches(0.65), Inches(3.38), Inches(7.00), Inches(0.20), margin=0.01)
    ptn = tb_tech_note.text_frame.paragraphs[0]
    ptn.text = "• Solid-state Peltier-based cooling maintains suitable storage conditions for the compact prototype."
    ptn.font.name = FONT_HEAD
    ptn.font.size = Pt(7.5)
    ptn.font.bold = True
    ptn.font.color.rgb = BLUE_DARK
    
    # TOP RIGHT: Concept Image (Width 4.90", Height 2.45")
    add_card(slide, Inches(7.95), Inches(1.18), Inches(4.90), Inches(2.45), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    if os.path.exists(HERO_IMG):
        slide.shapes.add_picture(HERO_IMG, Inches(8.05), Inches(1.26), Inches(4.70), Inches(1.95))
    add_badge(slide, Inches(8.05), Inches(3.26), Inches(4.70), Inches(0.30), 
              "HarvestIQ Farm-Gate Micro Solar Cold Storage Concept", CARD_BG_MUTED, TEXT_DARK, font_size=7.5, bold=True)

    # MIDDLE SECTION: Existing -> Gap -> HarvestIQ Comparison (Width 12.35", Height 1.35")
    add_card(slide, Inches(0.50), Inches(3.72), Inches(12.35), Inches(1.40), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    
    add_card(slide, Inches(0.65), Inches(3.82), Inches(3.85), Inches(0.90), bg_color=CARD_BG_MUTED, border_color=BORDER_MUTED, border_width=1.0)
    tb_ex = add_textbox(slide, Inches(0.75), Inches(3.86), Inches(3.65), Inches(0.82), margin=0.01)
    p_ex = tb_ex.text_frame.paragraphs[0]
    p_ex.text = "EXISTING INFRASTRUCTURE"
    p_ex.font.name = FONT_HEAD
    p_ex.font.size = Pt(8.0)
    p_ex.font.bold = True
    p_ex.font.color.rgb = NAVY_TEXT
    p_ex.space_after = Pt(2)
    p_ex2 = tb_ex.text_frame.add_paragraph()
    p_ex2.text = "Large / bulk cold-storage infrastructure and centralized compressor facilities. High capital cost, grid-reliant, and situated far from remote hilly farmsteads."
    p_ex2.font.name = FONT_BODY
    p_ex2.font.size = Pt(7.2)
    p_ex2.font.color.rgb = TEXT_MUTED

    add_card(slide, Inches(4.75), Inches(3.82), Inches(3.85), Inches(0.90), bg_color=AMBER_LIGHT, border_color=AMBER_BORDER, border_width=1.0)
    tb_gap = add_textbox(slide, Inches(4.85), Inches(3.86), Inches(3.65), Inches(0.82), margin=0.01)
    p_gap = tb_gap.text_frame.paragraphs[0]
    p_gap.text = "THE UNADDRESSED GAP"
    p_gap.font.name = FONT_HEAD
    p_gap.font.size = Pt(8.0)
    p_gap.font.bold = True
    p_gap.font.color.rgb = AMBER_DARK
    p_gap.space_after = Pt(2)
    p_gap2 = tb_gap.text_frame.add_paragraph()
    p_gap2.text = "Small & marginal farmers need a compact, accessible preservation layer right at harvest / collection points for short-term (24–72h) buffer storage before transit."
    p_gap2.font.name = FONT_BODY
    p_gap2.font.size = Pt(7.2)
    p_gap2.font.color.rgb = TEXT_BODY

    add_card(slide, Inches(8.85), Inches(3.82), Inches(3.85), Inches(0.90), bg_color=BLUE_LIGHT, border_color=BLUE_SIH, border_width=1.2)
    tb_hiq = add_textbox(slide, Inches(8.95), Inches(3.86), Inches(3.65), Inches(0.82), margin=0.01)
    p_hiq = tb_hiq.text_frame.paragraphs[0]
    p_hiq.text = "HARVESTIQ SOLUTION"
    p_hiq.font.name = FONT_HEAD
    p_hiq.font.size = Pt(8.0)
    p_hiq.font.bold = True
    p_hiq.font.color.rgb = BLUE_SIH
    p_hiq.space_after = Pt(2)
    p_hiq2 = tb_hiq.text_frame.add_paragraph()
    p_hiq2.text = "Compact (20–40L) + 100% Solar DC + LiFePO4 battery + Solid-state Peltier + ESP32 edge control + Multi-sensor IoT telemetry."
    p_hiq2.font.name = FONT_BODY
    p_hiq2.font.size = Pt(7.2)
    p_hiq2.font.color.rgb = TEXT_BODY

    add_badge(slide, Inches(0.65), Inches(4.78), Inches(12.05), Inches(0.26), 
              "STRATEGIC DIFFERENTIATION: “Not replacing large cold rooms — filling the last-mile preservation gap.”", 
              GREEN_LIGHT, GREEN_DARK, font_size=8.0, bold=True)

    # BOTTOM SECTION: Innovation & Uniqueness (Width 12.35", Height 1.55")
    add_card(slide, Inches(0.50), Inches(5.20), Inches(12.35), Inches(1.55), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(0.65), Inches(5.28), Inches(2.60), Inches(0.24), 
              "INNOVATION & SYSTEM UNIQUENESS", BLUE_SIH, WHITE, font_size=8.0, bold=True)

    innovations_list = [
        ("1. Decentralized Farm Architecture", "Micro-storage situated directly at farm level for immediate post-harvest heat removal."),
        ("2. 100% Off-Grid Solar + Battery", "Dedicated DC power bus with LiFePO4 battery buffer eliminating grid dependence."),
        ("3. Multi-Parameter Sensing Suite", "Real-time telemetry of temp, humidity, door ajar status, and battery state of charge."),
        ("4. Automated Edge Cooling Control", "Autonomous ESP32 firmware executes local hysteresis cooling logic without internet latency."),
        ("5. Proactive Alerting System", "Instant buzzer & mobile notifications for prolonged door openings or thermal deviations."),
        ("6. Crop-Specific Storage Profiles", "[Proposed / Future Intelligence] Target temperature & humidity presets tailored for specific crops."),
        ("7. Predictive Pre-Cooling", "[Proposed / Future Intelligence] Energy-aware pre-cooling scheduled during peak solar hours.")
    ]
    
    ix_coords = [
        (0.65, 5.58, 3.85), (4.75, 5.58, 3.85), (8.85, 5.58, 3.85),
        (0.65, 6.16, 2.85), (3.65, 6.16, 2.85), (6.65, 6.16, 2.95), (9.75, 6.16, 2.95)
    ]
    
    for (ititle, idesc), (ix, iy, iw) in zip(innovations_list, ix_coords):
        tb_in = add_textbox(slide, Inches(ix), Inches(iy), Inches(iw), Inches(0.52), margin=0.01)
        tf_in = tb_in.text_frame
        pi1 = tf_in.paragraphs[0]
        pi1.text = ititle
        pi1.font.name = FONT_HEAD
        pi1.font.size = Pt(7.8)
        pi1.font.bold = True
        pi1.font.color.rgb = BLUE_DARK if "Proposed" not in idesc else PURPLE_DARK
        
        pi2 = tf_in.add_paragraph()
        pi2.text = idesc
        pi2.font.name = FONT_BODY
        pi2.font.size = Pt(7.0)
        pi2.font.color.rgb = TEXT_BODY

print("Slides 1 & 2 defined")
def build_slide_3(slide):
    print("Building Slide 3: Technical Approach...")
    clear_old_placeholders(slide)
    format_team_oval_and_footers(slide)
    setup_header(slide, "TECHNICAL APPROACH", 
                 "System Architecture, Closed-Loop Control Logic & Solid-State Thermal Management")

    # TOP SECTION: System Architecture Diagram (Width 12.35", Height 2.45")
    add_card(slide, Inches(0.50), Inches(1.18), Inches(12.35), Inches(2.45), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(0.65), Inches(1.26), Inches(3.40), Inches(0.24), 
              "END-TO-END SYSTEM ARCHITECTURE & DATA FLOW", BLUE_SIH, WHITE, font_size=8.0, bold=True)

    # Pathway A: Energy & Solid-State Cooling Flow
    add_card(slide, Inches(0.65), Inches(1.56), Inches(12.05), Inches(0.92), bg_color=AMBER_LIGHT, border_color=AMBER_BORDER, border_width=1.0)
    tb_p1h = add_textbox(slide, Inches(0.75), Inches(1.58), Inches(11.80), Inches(0.20), margin=0.01)
    pp1 = tb_p1h.text_frame.paragraphs[0]
    pp1.text = "PATHWAY A: HARDWARE & ENERGY FLOW (100% Off-Grid Dedicated DC Architecture)"
    pp1.font.name = FONT_HEAD
    pp1.font.size = Pt(7.8)
    pp1.font.bold = True
    pp1.font.color.rgb = AMBER_DARK

    hw_nodes = [
        ("☀ SOLAR PV", "100W Monocrystalline"),
        ("MPPT CHARGER", "High-efficiency buck"),
        ("LiFePO4 BATTERY", "12V 20–40Ah pack"),
        ("DC POWER BUS", "Regulated 12V/5V rail"),
        ("PELTIER MODULE", "TEC1-12706 unit"),
        ("INSULATED BOX", "PUF chamber 20–40L"),
        ("FRESH PRODUCE", "4–8°C storage hold")
    ]
    hx = 0.75
    for i, (nh, nd) in enumerate(hw_nodes):
        add_badge(slide, Inches(hx), Inches(1.80), Inches(1.40), Inches(0.60), f"{nh}\n{nd}", 
                  WHITE, NAVY_HEADER, font_size=7.2, bold=True)
        if i < 6:
            add_badge(slide, Inches(hx + 1.42), Inches(1.95), Inches(0.22), Inches(0.26), "➔", 
                      AMBER_LIGHT, AMBER_DARK, font_size=8.5, bold=True)
        hx += 1.68

    # Pathway B: Sensing, Edge Control & IoT Telemetry Flow
    add_card(slide, Inches(0.65), Inches(2.54), Inches(12.05), Inches(0.95), bg_color=BLUE_LIGHT, border_color=BLUE_BORDER, border_width=1.0)
    tb_p2h = add_textbox(slide, Inches(0.75), Inches(2.56), Inches(11.80), Inches(0.20), margin=0.01)
    pp2 = tb_p2h.text_frame.paragraphs[0]
    pp2.text = "PATHWAY B: SENSING, EDGE CONTROL & IoT TELEMETRY FLOW (Closed-Loop Edge Execution)"
    pp2.font.name = FONT_HEAD
    pp2.font.size = Pt(7.8)
    pp2.font.bold = True
    pp2.font.color.rgb = BLUE_DARK

    ctrl_nodes = [
        ("SENSORS ARRAY", "Temp, RH, Door, Power"),
        ("ESP32 CONTROLLER", "Dual-core FreeRTOS logic"),
        ("MOSFET DRIVER", "PWM cooling modulation"),
        ("ALERTS & BUZZER", "Local LED + Audio alarm"),
        ("IoT DASHBOARD", "Cloud / Wi-Fi / 4G telemetry"),
        ("FARMER MONITORING", "Mobile alerts & historical logs")
    ]
    cx = 0.75
    for i, (nh, nd) in enumerate(ctrl_nodes):
        add_badge(slide, Inches(cx), Inches(2.78), Inches(1.68), Inches(0.60), f"{nh}\n{nd}", 
                  WHITE, NAVY_HEADER, font_size=7.2, bold=True)
        if i < 5:
            add_badge(slide, Inches(cx + 1.70), Inches(2.94), Inches(0.24), Inches(0.26), "➔", 
                      BLUE_LIGHT, BLUE_DARK, font_size=8.5, bold=True)
        cx += 1.98

    # BOTTOM LEFT: Technology Stack & Closed-Loop Control Workflow (Width 7.10", Height 3.00")
    add_card(slide, Inches(0.50), Inches(3.72), Inches(7.10), Inches(3.00), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(0.65), Inches(3.80), Inches(3.40), Inches(0.24), 
              "TECHNOLOGY LAYERS & CLOSED-LOOP CONTROL", BLUE_SIH, WHITE, font_size=8.0, bold=True)

    tb_layers = add_textbox(slide, Inches(0.65), Inches(4.08), Inches(6.80), Inches(0.95), margin=0.01)
    tf_l = tb_layers.text_frame
    
    pl1 = tf_l.paragraphs[0]
    pl1.text = "• HARDWARE LAYER: 100W Solar PV, MPPT charge controller, 12V LiFePO4 battery, Peltier module (TEC1-12706), internal fan, external extruded heatsink + 120mm exhaust fan, ESP32 MCU, DS18B20 temp probe, SHT31 humidity sensor, reed door switch, INA219 power telemetry."
    pl1.font.name = FONT_BODY
    pl1.font.size = Pt(7.2)
    pl1.font.color.rgb = TEXT_BODY
    pl1.space_after = Pt(2)
    
    pl2 = tf_l.add_paragraph()
    pl2.text = "• SOFTWARE & FIRMWARE: Embedded C/C++ (ESP-IDF / Arduino core), FreeRTOS dual-task execution, MQTT & HTTP REST protocols, responsive web IoT dashboard."
    pl2.font.name = FONT_BODY
    pl2.font.size = Pt(7.2)
    pl2.font.color.rgb = TEXT_BODY

    # Workflow Box
    add_card(slide, Inches(0.65), Inches(5.08), Inches(6.80), Inches(1.52), bg_color=GREEN_LIGHT, border_color=GREEN_BORDER, border_width=1.0)
    tb_wf = add_textbox(slide, Inches(0.75), Inches(5.12), Inches(6.60), Inches(1.42), margin=0.01)
    tf_wf = tb_wf.text_frame
    
    pwf_h = tf_wf.paragraphs[0]
    pwf_h.text = "CLOSED-LOOP WORKFLOW: INPUT ➔ PROCESS ➔ DECISION ➔ OUTPUT ➔ FEEDBACK"
    pwf_h.font.name = FONT_HEAD
    pwf_h.font.size = Pt(7.8)
    pwf_h.font.bold = True
    pwf_h.font.color.rgb = GREEN_DARK
    pwf_h.space_after = Pt(2)

    wf_items = [
        ("INPUT:", "Continuous sensor acquisition: chamber temperature, ambient RH, door contact, and battery voltage/current."),
        ("PROCESS:", "ESP32 firmware evaluates real-time sensor readings against crop target setpoint band (4–8°C) and battery low-voltage threshold."),
        ("DECISION:", "Is chamber temp > Setpoint + Hysteresis? Is battery charge safe (>11.5V)? Is chamber door securely closed?"),
        ("OUTPUT:", "Actuate PWM power MOSFET to power Peltier & fans; trigger audio-visual buzzer if door ajar; push telemetry to cloud."),
        ("FEEDBACK:", "Continuous 5-second polling loop provides closed-loop regulation, preventing thermal overshoot and battery over-discharge.")
    ]
    for lbl, desc in wf_items:
        p = tf_wf.add_paragraph()
        r1 = p.add_run()
        r1.text = lbl + " "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(7.0)
        r1.font.bold = True
        r1.font.color.rgb = NAVY_HEADER
        r2 = p.add_run()
        r2.text = desc
        r2.font.name = FONT_BODY
        r2.font.size = Pt(7.0)
        r2.font.color.rgb = TEXT_BODY

    # BOTTOM RIGHT: Solid-State Peltier Thermal Principle (Width 5.10", Height 3.00")
    add_card(slide, Inches(7.75), Inches(3.72), Inches(5.10), Inches(3.00), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(7.90), Inches(3.80), Inches(3.60), Inches(0.24), 
              "SOLID-STATE THERMOELECTRIC PRINCIPLE", BLUE_SIH, WHITE, font_size=8.0, bold=True)

    # Peltier Thermal Diagram Flow
    add_card(slide, Inches(7.90), Inches(4.08), Inches(4.80), Inches(1.30), bg_color=CARD_BG_MUTED, border_color=BORDER_MUTED, border_width=1.0)
    
    tsteps = [
        ("STORAGE CHAMBER", "Enclosed 20–40L insulated space", BLUE_LIGHT, BLUE_DARK),
        ("COLD SIDE PLATE", "Absorbs heat from storage chamber", BLUE_LIGHT, BLUE_SIH),
        ("PELTIER MODULE", "TEC solid-state heat pump transfer", PURPLE_LIGHT, PURPLE_DARK),
        ("HOT SIDE BASE", "Conducts rejected thermal energy", RED_LIGHT, RED_DARK),
        ("HEATSINK + FAN", "Forced-air heat dissipation to outside", AMBER_LIGHT, AMBER_DARK)
    ]
    
    ty = 4.12
    for tlabel, tsub, tbg, tcolor in tsteps:
        add_badge(slide, Inches(7.95), Inches(ty), Inches(1.40), Inches(0.20), tlabel, tbg, tcolor, font_size=6.8, bold=True)
        tb_td = add_textbox(slide, Inches(9.40), Inches(ty), Inches(3.20), Inches(0.20), margin=0.01)
        pt = tb_td.text_frame.paragraphs[0]
        pt.text = tsub
        pt.font.name = FONT_BODY
        pt.font.size = Pt(6.8)
        pt.font.color.rgb = TEXT_BODY
        ty += 0.23

    # Technical clarifications on Peltier
    tb_pelt_exp = add_textbox(slide, Inches(7.90), Inches(5.42), Inches(4.80), Inches(0.95), margin=0.01)
    tf_pe = tb_pelt_exp.text_frame
    
    ppe1 = tf_pe.paragraphs[0]
    ppe1.text = "• Technical Principle: The Peltier module transfers heat via the thermoelectric Seebeck/Peltier effect rather than creating cold."
    ppe1.font.name = FONT_BODY
    ppe1.font.size = Pt(7.2)
    ppe1.font.color.rgb = TEXT_BODY
    ppe1.space_after = Pt(2)
    
    ppe2 = tf_pe.add_paragraph()
    ppe2.text = "• Thermal Isolation: Cold side actively absorbs heat from chamber; hot side rejects heat externally to ambient air via high-CFM exhaust — hot air is NEVER directed into the storage chamber."
    ppe2.font.name = FONT_BODY
    ppe2.font.size = Pt(7.2)
    ppe2.font.color.rgb = TEXT_BODY
    ppe2.space_after = Pt(2)

    # Future commercial variant note
    add_card(slide, Inches(7.90), Inches(6.38), Inches(4.80), Inches(0.26), bg_color=GREEN_LIGHT, border_color=GREEN_BORDER, border_width=1.0)
    tb_comm = add_textbox(slide, Inches(7.95), Inches(6.40), Inches(4.70), Inches(0.22), margin=0.01)
    p_comm = tb_comm.text_frame.paragraphs[0]
    p_comm.text = "Commercial Note: For larger-capacity commercial variants, the refrigeration technology can be selected according to the required thermal load, while retaining the IoT/control architecture."
    p_comm.font.name = FONT_HEAD
    p_comm.font.size = Pt(6.5)
    p_comm.font.bold = True
    p_comm.font.color.rgb = GREEN_DARK

def build_slide_4(slide):
    print("Building Slide 4: Feasibility & Viability...")
    clear_old_placeholders(slide)
    format_team_oval_and_footers(slide)
    setup_header(slide, "FEASIBILITY AND VIABILITY", 
                 "Technical Viability, Operational Practicality, Economic Model & Defensible Risk Mitigation")

    # TOP SECTION: 3 Feasibility Columns (Width 12.35", Height 2.45")
    # Column 1: Technical Feasibility (Width 3.95")
    add_card(slide, Inches(0.50), Inches(1.18), Inches(3.95), Inches(2.45), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(0.65), Inches(1.26), Inches(2.40), Inches(0.24), 
              "A. TECHNICAL FEASIBILITY", BLUE_SIH, WHITE, font_size=8.0, bold=True)
              
    tb_tf = add_textbox(slide, Inches(0.65), Inches(1.54), Inches(3.65), Inches(2.00), margin=0.01)
    tf_tf = tb_tf.text_frame
    tf_points = [
        ("COTS Availability:", "Built entirely from commercially available off-the-shelf components (PV panels, battery, MCU, sensors)."),
        ("Proven Embedded Control:", "ESP32 multi-sensor telemetry, FreeRTOS logic, and PWM switching are mature and field-proven."),
        ("Established Solar Tech:", "Monocrystalline PV + LiFePO4 chemistry provides dependable, safe off-grid energy storage."),
        ("Thermoelectric Status:", "Peltier cooling is being evaluated for the compact prototype through thermal characterization."),
        ("Critical Thermal Factors:", "High-density PUF insulation and efficient hot-side heat dissipation are primary design determinants.")
    ]
    for i, (head, desc) in enumerate(tf_points):
        p = tf_tf.paragraphs[0] if i == 0 else tf_tf.add_paragraph()
        r1 = p.add_run()
        r1.text = "• " + head + " "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(7.2)
        r1.font.bold = True
        r1.font.color.rgb = NAVY_HEADER
        r2 = p.add_run()
        r2.text = desc
        r2.font.name = FONT_BODY
        r2.font.size = Pt(7.0)
        r2.font.color.rgb = TEXT_BODY
        p.space_after = Pt(2)

    # Column 2: Operational Feasibility (Width 3.95")
    add_card(slide, Inches(4.60), Inches(1.18), Inches(3.95), Inches(2.45), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(4.75), Inches(1.26), Inches(2.50), Inches(0.24), 
              "B. OPERATIONAL FEASIBILITY", GREEN_DARK, WHITE, font_size=8.0, bold=True)
              
    tb_of = add_textbox(slide, Inches(4.75), Inches(1.54), Inches(3.65), Inches(2.00), margin=0.01)
    tf_of = tb_of.text_frame
    of_points = [
        ("Farmer-Centric UI:", "Simple local indicators (LED/Buzzer) and intuitive multilingual mobile dashboard requiring zero tech training."),
        ("Low Maintenance:", "Solid-state thermoelectric module contains zero mechanical compressors, belts, or refrigerant piping to service."),
        ("True Off-Grid Autonomy:", "Direct solar daytime operation with LiFePO4 battery buffer sustains continuous 24-hr cooling."),
        ("Automated Anomaly Alerts:", "Real-time notifications for door-ajar, high temperature, or low battery level prevent produce loss."),
        ("Deployment Flexibility:", "Designed for individual farm-gate placement or shared Farmer Producer Organization (FPO) hubs.")
    ]
    for i, (head, desc) in enumerate(of_points):
        p = tf_of.paragraphs[0] if i == 0 else tf_of.add_paragraph()
        r1 = p.add_run()
        r1.text = "• " + head + " "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(7.2)
        r1.font.bold = True
        r1.font.color.rgb = GREEN_DARK
        r2 = p.add_run()
        r2.text = desc
        r2.font.name = FONT_BODY
        r2.font.size = Pt(7.0)
        r2.font.color.rgb = TEXT_BODY
        p.space_after = Pt(2)

    # Column 3: Economic & Business Viability (Width 4.10")
    add_card(slide, Inches(8.75), Inches(1.18), Inches(4.10), Inches(2.45), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(8.90), Inches(1.26), Inches(2.60), Inches(0.24), 
              "C. ECONOMIC & COST MODEL", AMBER_DARK, WHITE, font_size=8.0, bold=True)

    # Cost Callout Box
    add_card(slide, Inches(8.90), Inches(1.54), Inches(3.80), Inches(0.55), bg_color=AMBER_LIGHT, border_color=AMBER_BORDER, border_width=1.0)
    tb_cost = add_textbox(slide, Inches(9.00), Inches(1.56), Inches(3.60), Inches(0.50), margin=0.01)
    tf_c = tb_cost.text_frame
    pc1 = tf_c.paragraphs[0]
    pc1.text = "ESTIMATED PROTOTYPE COST: ₹25,000"
    pc1.font.name = FONT_HEAD
    pc1.font.size = Pt(9.5)
    pc1.font.bold = True
    pc1.font.color.rgb = AMBER_DARK
    pc1.alignment = PP_ALIGN.CENTER
    pc2 = tf_c.add_paragraph()
    pc2.text = "Targeted low-cost prototype architecture; commercial pricing requires field validation and production costing."
    pc2.font.name = FONT_BODY
    pc2.font.size = Pt(6.8)
    pc2.font.color.rgb = TEXT_DARK
    pc2.alignment = PP_ALIGN.CENTER

    tb_bom = add_textbox(slide, Inches(8.90), Inches(2.14), Inches(3.80), Inches(1.40), margin=0.01)
    tf_b = tb_bom.text_frame
    bom_items = [
        ("Energy Subsystem (~48%):", "100W Solar PV + MPPT + 12V LiFePO4 battery pack."),
        ("Enclosure & PUF (~20%):", "Insulated 20–40L box, seals, and aluminum cold-plate."),
        ("Control & Sensors (~10%):", "ESP32 MCU, DS18B20, SHT31, INA219, and wiring."),
        ("Peltier Cooling Kit (~8%):", "TEC1-12706 module, extruded heatsink, and dual fans."),
        ("Assembly & Spares (~14%):", "Connectors, protective enclosure, and hardware."),
        ("Commercial Outlook:", "Commercial production cost to be determined after pilot-scale engineering and bulk sourcing.")
    ]
    for i, (bhead, bdesc) in enumerate(bom_items):
        p = tf_b.paragraphs[0] if i == 0 else tf_b.add_paragraph()
        r1 = p.add_run()
        r1.text = "• " + bhead + " "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(6.8)
        r1.font.bold = True
        r1.font.color.rgb = NAVY_HEADER if i < 5 else BLUE_DARK
        r2 = p.add_run()
        r2.text = bdesc
        r2.font.name = FONT_BODY
        r2.font.size = Pt(6.8)
        r2.font.color.rgb = TEXT_BODY
        p.space_after = Pt(1)

    # BOTTOM SECTION: Risks & Mitigation Matrix + Validation Roadmap (Width 12.35", Height 3.00")
    # Left: Risks & Mitigation (Width 6.90")
    add_card(slide, Inches(0.50), Inches(3.72), Inches(6.90), Inches(3.00), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(0.65), Inches(3.80), Inches(2.80), Inches(0.24), 
              "D. RISKS & ENGINEERING MITIGATION MATRIX", RED_DARK, WHITE, font_size=8.0, bold=True)

    tb_rm = add_textbox(slide, Inches(0.65), Inches(4.08), Inches(6.60), Inches(2.55), margin=0.01)
    tf_rm = tb_rm.text_frame
    
    risks_data = [
        ("High Ambient Heat & Peltier Efficiency Drop:", 
         "Peltier cooling performance decreases as ambient temperature and hot-side temperature increase.",
         "✔ Mitigation: High-density multi-layer PUF insulation + oversized extruded heatsink with high-CFM external exhaust fan."),
        ("Battery Degradation over 3–5 Years in Rural Conditions:", 
         "Frequent deep discharge cycles degrade standard lead-acid batteries.",
         "✔ Mitigation: High-cycle LiFePO4 chemistry (2000+ cycles) with integrated BMS low-voltage cutoffs."),
        ("Sensor Calibration Drift in High Field Humidity:", 
         "Moisture in NER climate can corrode exposed electronic sensors.",
         "✔ Mitigation: Sealed IP67 waterproof DS18B20 stainless temperature probes + conformal coating on PCB."),
        ("Seasonal Monsoon / Cloudy Solar Variations:", 
         "Extended cloud cover reduces daily solar energy harvesting.",
         "✔ Mitigation: Sized LiFePO4 energy reserve + adaptive energy-aware cooling logic with dynamic hysteresis."),
        ("Thermal Shock from Fresh Warm Produce:", 
         "Loading field-hot vegetables creates a sudden thermal spike.",
         "✔ Mitigation: Internal circulation pre-cooling and staggered batch-loading guidelines for farmers."),
        ("Farmer Digital Literacy & Adoption Resistance:", 
         "Smallholders may hesitate to use complex smartphone applications.",
         "✔ Mitigation: Autonomous local edge control (cooling operates without app) + simple multilingual voice/LED alerts.")
    ]
    
    for i, (rtitle, rdesc, rmit) in enumerate(risks_data):
        p = tf_rm.paragraphs[0] if i == 0 else tf_rm.add_paragraph()
        r1 = p.add_run()
        r1.text = f"{i+1}. {rtitle} "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(7.0)
        r1.font.bold = True
        r1.font.color.rgb = RED_DARK
        
        r2 = p.add_run()
        r2.text = f"{rdesc} — "
        r2.font.name = FONT_BODY
        r2.font.size = Pt(6.8)
        r2.font.color.rgb = TEXT_MUTED
        
        r3 = p.add_run()
        r3.text = rmit
        r3.font.name = FONT_HEAD
        r3.font.size = Pt(6.8)
        r3.font.bold = True
        r3.font.color.rgb = GREEN_DARK
        p.space_after = Pt(2)

    # Right: Validation Status Box (Width 5.25")
    add_card(slide, Inches(7.60), Inches(3.72), Inches(5.25), Inches(3.00), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(7.75), Inches(3.80), Inches(3.20), Inches(0.24), 
              "EMPIRICAL VALIDATION FRAMEWORK", BLUE_SIH, WHITE, font_size=8.0, bold=True)

    # Demonstrated Card
    add_card(slide, Inches(7.75), Inches(4.08), Inches(4.95), Inches(1.10), bg_color=GREEN_LIGHT, border_color=GREEN_BORDER, border_width=1.0)
    tb_vd = add_textbox(slide, Inches(7.85), Inches(4.10), Inches(4.75), Inches(1.02), margin=0.01)
    tf_vd = tb_vd.text_frame
    pvd_h = tf_vd.paragraphs[0]
    pvd_h.text = "CURRENTLY DEMONSTRATED (Prototype Architecture):"
    pvd_h.font.name = FONT_HEAD
    pvd_h.font.size = Pt(7.5)
    pvd_h.font.bold = True
    pvd_h.font.color.rgb = GREEN_DARK
    pvd_h.space_after = Pt(1)

    dem_items = [
        "✔ End-to-end solar PV, MPPT, battery, and DC power bus integration.",
        "✔ ESP32 multi-sensor telemetry (temperature, humidity, door, power).",
        "✔ Automated closed-loop hysteresis cooling control logic & low-voltage protection.",
        "✔ Live web IoT dashboard demonstration with real-time alert dispatch."
    ]
    for item in dem_items:
        p = tf_vd.add_paragraph()
        p.text = item
        p.font.name = FONT_BODY
        p.font.size = Pt(6.8)
        p.font.color.rgb = NAVY_HEADER

    # Next to Validate Card
    add_card(slide, Inches(7.75), Inches(5.26), Inches(4.95), Inches(1.36), bg_color=BLUE_LIGHT, border_color=BLUE_BORDER, border_width=1.0)
    tb_vn = add_textbox(slide, Inches(7.85), Inches(5.28), Inches(4.75), Inches(1.28), margin=0.01)
    tf_vn = tb_vn.text_frame
    pvn_h = tf_vn.paragraphs[0]
    pvn_h.text = "PLANNED LAB & FIELD VALIDATION STEPS:"
    pvn_h.font.name = FONT_HEAD
    pvn_h.font.size = Pt(7.5)
    pvn_h.font.bold = True
    pvn_h.font.color.rgb = BLUE_DARK
    pvn_h.space_after = Pt(1)

    val_targets = [
        "• Chamber pull-down time from ambient to target setpoint (4–8°C).",
        "• Steady-state temperature maintenance & recovery after door openings.",
        "• Internal relative humidity stability (85–95% RH) for leafy vegetables.",
        "• 24-hr watt-hour energy consumption & LiFePO4 battery autonomy duration.",
        "• Cooling performance under varying ambient temperatures (25°C to 40°C).",
        "• Shelf-life extension and produce weight retention across vegetable varieties."
    ]
    for target in val_targets:
        p = tf_vn.add_paragraph()
        p.text = target
        p.font.name = FONT_BODY
        p.font.size = Pt(6.8)
        p.font.color.rgb = TEXT_BODY

print("Slides 3 & 4 defined")
def build_slide_5(slide):
    print("Building Slide 5: Impact & Benefits...")
    clear_old_placeholders(slide)
    format_team_oval_and_footers(slide)
    setup_header(slide, "IMPACT AND BENEFITS", 
                 "Socio-Economic Value Creation, Post-Harvest Preservation & Sustainable Micro-Cold-Chain")

    # TOP SECTION: Farm-to-Market Value Journey (Width 12.35", Height 1.15")
    add_card(slide, Inches(0.50), Inches(1.18), Inches(12.35), Inches(1.15), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(0.65), Inches(1.24), Inches(2.80), Inches(0.22), 
              "FARM-TO-MARKET VALUE JOURNEY", BLUE_SIH, WHITE, font_size=7.5, bold=True)

    journey_steps = [
        ("1. FARM HARVEST", "Picked at peak freshness"),
        ("2. HARVESTIQ STORAGE", "Immediate pre-cooling buffer"),
        ("3. PRESERVED QUALITY", "Moisture & freshness held"),
        ("4. MARKET TIMING", "Avoid distress sales"),
        ("5. VALUE CREATION", "Higher net farmer profit")
    ]
    jx = 0.65
    for i, (jh, jd) in enumerate(journey_steps):
        add_badge(slide, Inches(jx), Inches(1.52), Inches(1.95), Inches(0.68), f"{jh}\n{jd}", 
                  GREEN_LIGHT, GREEN_DARK, font_size=7.5, bold=True)
        if i < 4:
            add_badge(slide, Inches(jx + 1.98), Inches(1.72), Inches(0.24), Inches(0.26), "➔", 
                      WHITE, GREEN_DARK, font_size=9.0, bold=True)
        jx += 2.45

    # MIDDLE SECTION: 5 Impact Categories (Width 12.35", Height 2.25")
    add_card(slide, Inches(0.50), Inches(2.42), Inches(12.35), Inches(2.25), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(0.65), Inches(2.48), Inches(3.00), Inches(0.22), 
              "FIVE PILLARS OF MEASURABLE VALUE", BLUE_SIH, WHITE, font_size=7.5, bold=True)

    impact_pillars = [
        ("FARMER EMPOWERMENT", [
            "Greater autonomy over harvest buffer storage.",
            "Reduced dependence on immediate distress sales.",
            "Enhanced bargaining power with traders."
        ], BLUE_LIGHT, BLUE_DARK),
        ("ECONOMIC VALUE", [
            "Potential reduction in post-harvest physical loss.",
            "Opportunity to time sales for peak market rates.",
            "Accessible modular micro-capex model."
        ], GREEN_LIGHT, GREEN_DARK),
        ("RURAL ACCESSIBILITY", [
            "Designed for remote, hilly NER geographies.",
            "100% off-grid; zero rural grid dependence.",
            "Simple multilingual interface for rural farmers."
        ], AMBER_LIGHT, AMBER_DARK),
        ("SUSTAINABILITY", [
            "100% solar powered; zero operational emissions.",
            "No chemical refrigerants (CFC/HFC) in prototype.",
            "Reduces food waste, saving water & resources."
        ], PURPLE_LIGHT, PURPLE_DARK),
        ("DATA & VISIBILITY", [
            "Real-time multi-parameter telemetry & logging.",
            "Automated closed-loop edge thermal control.",
            "Proactive mobile alerts for temperature & door."
        ], BLUE_LIGHT, BLUE_SIH)
    ]

    px = 0.65
    for ptitle, pbullets, pbg, pcolor in impact_pillars:
        add_card(slide, Inches(px), Inches(2.76), Inches(2.25), Inches(1.78), bg_color=pbg, border_color=pcolor, border_width=1.0)
        tb_p = add_textbox(slide, Inches(px + 0.08), Inches(2.80), Inches(2.09), Inches(1.68), margin=0.01)
        tf_p = tb_p.text_frame
        
        ph = tf_p.paragraphs[0]
        ph.text = ptitle
        ph.font.name = FONT_HEAD
        ph.font.size = Pt(8.0)
        ph.font.bold = True
        ph.font.color.rgb = pcolor
        ph.space_after = Pt(3)

        for b in pbullets:
            p = tf_p.add_paragraph()
            p.text = "• " + b
            p.font.name = FONT_BODY
            p.font.size = Pt(7.0)
            p.font.color.rgb = TEXT_DARK
            p.space_after = Pt(2)
        px += 2.45

    # BOTTOM SECTION: Measure in Pilot Strip + Future Intelligence (Width 12.35", Height 1.95")
    # Left: Measure in Pilot Strip (Width 7.15")
    add_card(slide, Inches(0.50), Inches(4.76), Inches(7.15), Inches(1.95), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(0.65), Inches(4.82), Inches(4.20), Inches(0.22), 
              "MEASURE IN PILOT: TARGET VALIDATION METRICS", BLUE_SIH, WHITE, font_size=7.5, bold=True)
              
    tb_ms = add_textbox(slide, Inches(0.65), Inches(5.08), Inches(6.85), Inches(1.55), margin=0.01)
    tf_ms = tb_ms.text_frame
    
    pms_note = tf_ms.paragraphs[0]
    pms_note.text = "*Rigorous evidence-driven approach — establishing empirical benchmarks during field trials rather than unsupported claims:"
    pms_note.font.name = FONT_BODY
    pms_note.font.size = Pt(7.0)
    pms_note.font.bold = True
    pms_note.font.color.rgb = RED_DARK
    pms_note.space_after = Pt(2)

    val_metrics = [
        ("Pull-Down Time:", "Hours required to achieve 4–8°C storage setpoint under rated crop thermal load."),
        ("Temperature Stability:", "Chamber thermal variation margin (±0.5°C) under fluctuating ambient temperatures."),
        ("Energy Consumption:", "Average 24-hour watt-hour (Wh) energy profile under full solid-state cooling cycle."),
        ("Battery Autonomy:", "Sustained operating hours achieved solely on LiFePO4 storage during overcast days."),
        ("Shelf-Life Improvement:", "Measured extension in marketable days compared to ambient control samples."),
        ("Spoilage Reduction:", "Quantified reduction in produce physical decay and post-harvest weight loss.")
    ]
    for mlabel, mdesc in val_metrics:
        p = tf_ms.add_paragraph()
        r1 = p.add_run()
        r1.text = "• " + mlabel + " "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(6.8)
        r1.font.bold = True
        r1.font.color.rgb = NAVY_HEADER
        r2 = p.add_run()
        r2.text = mdesc
        r2.font.name = FONT_BODY
        r2.font.size = Pt(6.8)
        r2.font.color.rgb = TEXT_BODY
        p.space_after = Pt(1)

    # Right: Future Intelligence Roadmap (Width 5.05")
    add_card(slide, Inches(7.80), Inches(4.76), Inches(5.05), Inches(1.95), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(7.95), Inches(4.82), Inches(3.60), Inches(0.22), 
              "FUTURE INTELLIGENCE ROADMAP [Proposed Capabilities]", PURPLE_DARK, WHITE, font_size=7.5, bold=True)

    fi_steps = [
        ("IoT Telemetry", "Real-time microclimate & energy data collection"),
        ("Data Analytics", "Storage patterns, decay trends & baseline profiling"),
        ("Shelf-Life Prediction", "AI estimation of remaining marketable produce days"),
        ("Demand-Aware Storage", "Market-coordinated cooling & dispatch scheduling")
    ]
    fiy = 5.08
    for fih, fid in fi_steps:
        add_badge(slide, Inches(7.95), Inches(fiy), Inches(1.35), Inches(0.24), fih, PURPLE_LIGHT, PURPLE_DARK, font_size=6.8, bold=True)
        tb_fi = add_textbox(slide, Inches(9.35), Inches(fiy), Inches(3.40), Inches(0.24), margin=0.01)
        p = tb_fi.text_frame.paragraphs[0]
        p.text = fid
        p.font.name = FONT_BODY
        p.font.size = Pt(6.8)
        p.font.color.rgb = TEXT_BODY
        fiy += 0.28

    add_badge(slide, Inches(7.95), Inches(6.32), Inches(4.75), Inches(0.26), 
              "“From cold storage hardware to an intelligent micro-cold-chain platform.”", 
              GREEN_LIGHT, GREEN_DARK, font_size=7.2, bold=True)

def build_slide_6(slide):
    print("Building Slide 6: Research, References & Defensible Conclusion...")
    clear_old_placeholders(slide)
    format_team_oval_and_footers(slide)
    setup_header(slide, "RESEARCH  AND REFERENCES", 
                 "Prior Art Benchmarking, Scientific Literature, Institutional Sources & Defensible Conclusion")

    # TOP LEFT: Research Foundation & Prior Art (Width 6.05", Height 2.85")
    add_card(slide, Inches(0.50), Inches(1.18), Inches(6.05), Inches(2.85), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(0.65), Inches(1.26), Inches(3.20), Inches(0.24), 
              "RESEARCH FOUNDATION & BENCHMARKING", BLUE_SIH, WHITE, font_size=8.0, bold=True)

    tb_rf = add_textbox(slide, Inches(0.65), Inches(1.54), Inches(5.75), Inches(2.40), margin=0.01)
    tf_rf = tb_rf.text_frame
    
    prf1 = tf_rf.paragraphs[0]
    prf1.text = "1. PUSA FARM SUNFRIDGE (Benchmark Inspiration):"
    prf1.font.name = FONT_HEAD
    prf1.font.size = Pt(7.8)
    prf1.font.bold = True
    prf1.font.color.rgb = GREEN_DARK
    
    prf2 = tf_rf.add_paragraph()
    prf2.text = "• Developed by Dr. Sangeeta Chopra (IARI) in collaboration with Michigan State University.\n• Off-grid, solar-powered farm cold storage facility demonstrating the fundamental viability of decentralized solar preservation for smallholders.\n• System Differentiation: Pusa SunFridge is a larger (~1–2 tonne) farm-level cold room; HarvestIQ targets a compact (20–40L) micro-storage unit with battery buffer, solid-state cooling, and IoT monitoring for individual smallholders and quick harvest batching.\n• Core Benchmark Positioning: “Existing solutions validate the need for decentralized solar-based preservation; HarvestIQ focuses on a compact, IoT-enabled micro-storage architecture.”"
    prf2.font.name = FONT_BODY
    prf2.font.size = Pt(6.8)
    prf2.font.color.rgb = TEXT_BODY
    prf2.space_after = Pt(2)

    prf3 = tf_rf.add_paragraph()
    prf3.text = "2. POST-HARVEST AGRONOMIC RESEARCH:"
    prf3.font.name = FONT_HEAD
    prf3.font.size = Pt(7.8)
    prf3.font.bold = True
    prf3.font.color.rgb = BLUE_DARK

    prf4 = tf_rf.add_paragraph()
    prf4.text = "• Rapid field heat removal is the single most critical agronomic factor in suppressing vegetable respiration and moisture transpiration.\n• Hilly Northeast logistics necessitate immediate decentralized pre-cooling at the farm gate before multi-day transit."
    prf4.font.name = FONT_BODY
    prf4.font.size = Pt(6.8)
    prf4.font.color.rgb = TEXT_BODY

    # TOP RIGHT: Institutional References & Team Mentorship Panel (Width 6.15", Height 2.85")
    add_card(slide, Inches(6.70), Inches(1.18), Inches(6.15), Inches(2.85), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(6.85), Inches(1.26), Inches(3.20), Inches(0.24), 
              "INSTITUTIONAL & SCIENTIFIC REFERENCES", BLUE_SIH, WHITE, font_size=8.0, bold=True)

    tb_ref = add_textbox(slide, Inches(6.85), Inches(1.54), Inches(5.85), Inches(1.55), margin=0.01)
    tf_ref = tb_ref.text_frame
    
    refs = [
        ("NITI Aayog Frontier Tech:", "Solar-Powered Cold Storage: A Sustainable Solution for India's Agricultural Sector.", "frontiertech.niti.gov.in"),
        ("NITI Aayog Frontier Tech:", "Reimagining Cold Chains: Tech-Driven Storage Solutions for India’s Perishable Agriculture.", "frontiertech.niti.gov.in"),
        ("Inclusive IAS:", "Issues with Transportation of Agricultural Produce in India: Infrastructure Bottlenecks.", "inclusiveias.com"),
        ("Times of India:", "From Farm to Fork: Rethinking India’s Cold Chain Architecture.", "timesofindia.indiatimes.com"),
        ("ICAR Literature:", "Guidelines for On-Farm Cooling and Handling of Perishable Horticultural Crops.", "icar.gov.in")
    ]
    for i, (auth, title, url) in enumerate(refs):
        p = tf_ref.paragraphs[0] if i == 0 else tf_ref.add_paragraph()
        r1 = p.add_run()
        r1.text = f"[{i+1}] {auth} "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(6.8)
        r1.font.bold = True
        r1.font.color.rgb = NAVY_HEADER
        
        r2 = p.add_run()
        r2.text = f"“{title}” "
        r2.font.name = FONT_BODY
        r2.font.size = Pt(6.8)
        r2.font.color.rgb = TEXT_BODY
        
        r3 = p.add_run()
        r3.text = f"({url})"
        r3.font.name = FONT_BODY
        r3.font.size = Pt(6.2)
        r3.font.color.rgb = TEXT_MUTED
        p.space_after = Pt(1)

    # Team & Mentor Panel
    add_card(slide, Inches(6.85), Inches(3.15), Inches(5.85), Inches(0.80), bg_color=CARD_BG_MUTED, border_color=BORDER_MUTED, border_width=1.0)
    tb_team = add_textbox(slide, Inches(6.95), Inches(3.18), Inches(5.65), Inches(0.72), margin=0.01)
    tf_t = tb_team.text_frame
    pt1 = tf_t.paragraphs[0]
    pt1.text = "PROJECT TEAM & ACADEMIC MENTORSHIP"
    pt1.font.name = FONT_HEAD
    pt1.font.size = Pt(7.5)
    pt1.font.bold = True
    pt1.font.color.rgb = BLUE_DARK
    
    pt2 = tf_t.add_paragraph()
    pt2.text = "• Team Members: Sk Aman (Team Leader), P. Gopi Chand, P. Uday Kiran, K. Manu Vidya, S. Greeshma, G. Naveen Kumar"
    pt2.font.name = FONT_BODY
    pt2.font.size = Pt(6.8)
    pt2.font.color.rgb = TEXT_BODY
    
    pt3 = tf_t.add_paragraph()
    pt3.text = "• SIH Academic Mentor: Dr. B. Satya Sri, Professor – Department of ECE"
    pt3.font.name = FONT_HEAD
    pt3.font.size = Pt(6.8)
    pt3.font.bold = True
    pt3.font.color.rgb = GREEN_DARK

    # BOTTOM SECTION: Defensible Conclusion & Implementation Roadmap (Width 12.35", Height 2.65")
    add_card(slide, Inches(0.50), Inches(4.15), Inches(12.35), Inches(2.65), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    add_badge(slide, Inches(0.65), Inches(4.22), Inches(3.20), Inches(0.24), 
              "DEFENSIBLE CONCLUSION & EXECUTION ROADMAP", BLUE_SIH, WHITE, font_size=8.0, bold=True)

    # 5-Point Executive Synthesis (Left Half, Width 6.80")
    add_card(slide, Inches(0.65), Inches(4.50), Inches(6.80), Inches(2.15), bg_color=CARD_BG_MUTED, border_color=BORDER_MUTED, border_width=1.0)
    tb_conc = add_textbox(slide, Inches(0.75), Inches(4.54), Inches(6.60), Inches(2.05), margin=0.01)
    tf_c = tb_conc.text_frame
    
    conc_points = [
        ("1. PROBLEM:", "Smallholders in remote, hilly NER lack decentralized preservation, causing rapid spoilage & distress sales."),
        ("2. SOLUTION:", "HarvestIQ integrates 100% solar PV, LiFePO4 battery, solid-state Peltier cooling, ESP32 intelligence & IoT telemetry."),
        ("3. EVIDENCE:", "Prototype architecture, edge control, and telemetry workflow demonstrated; thermodynamic pull-down and field trials are the defined validation steps."),
        ("4. IMPACT:", "Protects produce quality, grants farmers market timing flexibility, and establishes an accessible micro-cold-chain layer."),
        ("5. RECOMMENDATION:", "Proceed to thermal characterization → farmer pilot in NER clusters → optimization → scalable deployment.")
    ]
    for i, (chead, cdesc) in enumerate(conc_points):
        p = tf_c.paragraphs[0] if i == 0 else tf_c.add_paragraph()
        r1 = p.add_run()
        r1.text = chead + " "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(7.0)
        r1.font.bold = True
        r1.font.color.rgb = BLUE_DARK if i in [0, 1] else (GREEN_DARK if i in [2, 3] else RED_DARK)
        r2 = p.add_run()
        r2.text = cdesc
        r2.font.name = FONT_BODY
        r2.font.size = Pt(6.8)
        r2.font.color.rgb = TEXT_BODY
        p.space_after = Pt(2)

    # Execution Roadmap & Anchor Statement (Right Half, Width 5.25")
    add_card(slide, Inches(7.55), Inches(4.50), Inches(5.15), Inches(2.15), bg_color=WHITE, border_color=BORDER_MUTED, border_width=1.0)
    tb_rmh = add_textbox(slide, Inches(7.65), Inches(4.54), Inches(4.95), Inches(0.20), margin=0.01)
    prmh = tb_rmh.text_frame.paragraphs[0]
    prmh.text = "PHASED IMPLEMENTATION ROADMAP"
    prmh.font.name = FONT_HEAD
    prmh.font.size = Pt(7.8)
    prmh.font.bold = True
    prmh.font.color.rgb = NAVY_HEADER

    road_steps = [
        ("NOW", "Prototype & Thermal Testing", "Characterize pull-down rate & steady-state COP"),
        ("NEXT", "Field Pilot & Farmer Trials", "Validate in real NER farming cluster with user feedback"),
        ("THEN", "Optimization & Sourcing", "Optimize insulation k-value, battery capacity & BOM cost"),
        ("FUTURE", "Intelligent Micro-Cold-Chain", "Scale modular units with predictive cloud shelf-life AI")
    ]
    ry = 4.78
    for rphase, rtitle, rsub in road_steps:
        add_badge(slide, Inches(7.65), Inches(ry), Inches(0.85), Inches(0.28), rphase, BLUE_SIH, WHITE, font_size=7.2, bold=True)
        tb_r = add_textbox(slide, Inches(8.55), Inches(ry), Inches(4.05), Inches(0.28), margin=0.01)
        p = tb_r.text_frame.paragraphs[0]
        r1 = p.add_run()
        r1.text = rtitle + ": "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(7.0)
        r1.font.bold = True
        r1.font.color.rgb = NAVY_HEADER
        r2 = p.add_run()
        r2.text = rsub
        r2.font.name = FONT_BODY
        r2.font.size = Pt(6.8)
        r2.font.color.rgb = TEXT_BODY
        ry += 0.32

    # Closing Callout
    add_card(slide, Inches(7.65), Inches(6.12), Inches(4.95), Inches(0.44), bg_color=GREEN_LIGHT, border_color=GREEN_BORDER, border_width=1.0)
    tb_end = add_textbox(slide, Inches(7.75), Inches(6.14), Inches(4.75), Inches(0.38), margin=0.01)
    tf_end = tb_end.text_frame
    pend = tf_end.paragraphs[0]
    pend.text = "“Preserve Freshness. Choose When to Sell. Create Better Value.”"
    pend.font.name = FONT_HEAD
    pend.font.size = Pt(8.2)
    pend.font.bold = True
    pend.font.color.rgb = GREEN_DARK
    pend.alignment = PP_ALIGN.CENTER

def main():
    print(f"Loading template: {INPUT_PPTX}")
    prs = Presentation(INPUT_PPTX)
    print(f"Initial slides count: {len(prs.slides)}")

    # Remove Slide 7 (the instruction slide) if present
    if len(prs.slides) >= 7:
        print("Removing instruction Slide 7...")
        rId = prs.slides._sldIdLst[6].rId
        prs.part.drop_rel(rId)
        del prs.slides._sldIdLst[6]
        print(f"Slides count after deletion: {len(prs.slides)}")

    # Build slides 1 to 6
    build_slide_1(prs.slides[0])
    build_slide_2(prs.slides[1])
    build_slide_3(prs.slides[2])
    build_slide_4(prs.slides[3])
    build_slide_5(prs.slides[4])
    build_slide_6(prs.slides[5])

    print(f"Saving presentation to: {OUTPUT_PPTX}")
    prs.save(OUTPUT_PPTX)
    print("Presentation saved successfully!")

if __name__ == "__main__":
    main()
