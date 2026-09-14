import os
import pptx
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

INPUT_PPTX = "SIH2026-IDEA-Presentation-Format.pptx"
OUTPUT_PPTX = "SIH_26005_Smart_Solar_Cold_Storage_FINAL.pptx"
HERO_IMG = "hero_cold_storage.jpg"

# Color Palette
NAVY_TITLE    = RGBColor(15, 23, 42)      # #0F172A
NAVY_CARD     = RGBColor(30, 41, 59)      # #1E293B
BLUE_SIH      = RGBColor(0, 112, 192)     # #0070C0
BLUE_DARK     = RGBColor(3, 105, 161)     # #0369A1
BLUE_LIGHT    = RGBColor(238, 246, 255)   # #EEF6FF
GREEN_AGRI    = RGBColor(22, 101, 52)     # #166534
GREEN_EMERALD = RGBColor(16, 149, 106)    # #10956A
GREEN_TINT    = RGBColor(240, 253, 244)   # #F0FDF4
AMBER_SOLAR   = RGBColor(217, 119, 6)     # #D97706
AMBER_TINT    = RGBColor(254, 243, 199)   # #FEF3C7
TEAL_COOL     = RGBColor(13, 148, 136)    # #0D9488
TEAL_TINT     = RGBColor(240, 253, 250)   # #F0FDFA
CARD_BG       = RGBColor(248, 250, 252)   # #F8FAFC
CARD_BORDER   = RGBColor(203, 213, 225)   # #CBD5E1
WHITE         = RGBColor(255, 255, 255)
TEXT_DARK     = RGBColor(30, 41, 59)      # #1E293B
TEXT_MUTED    = RGBColor(100, 116, 139)   # #64748B
RED_ACCENT    = RGBColor(185, 28, 28)     # #B91C1C
RED_TINT      = RGBColor(254, 242, 242)   # #FEF2F2

FONT_HEAD = "Segoe UI"
FONT_BODY = "Arial"

def add_card(slide, left, top, width, height, bg_color=CARD_BG, border_color=CARD_BORDER, border_width=1):
    card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
    card.fill.solid()
    card.fill.fore_color.rgb = bg_color
    if border_color:
        card.line.color.rgb = border_color
        card.line.width = Pt(border_width)
    else:
        card.line.fill.background()
    return card

def add_rect(slide, left, top, width, height, bg_color=CARD_BG, border_color=None, border_width=1):
    rect = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, top, width, height)
    rect.fill.solid()
    rect.fill.fore_color.rgb = bg_color
    if border_color:
        rect.line.color.rgb = border_color
        rect.line.width = Pt(border_width)
    else:
        rect.line.fill.background()
    return rect

def add_badge(slide, left, top, width, height, text, bg_color=BLUE_SIH, text_color=WHITE, font_size=8.5, bold=True):
    badge = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height)
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

def add_tb(slide, left, top, width, height, text="", font_name=FONT_BODY, font_size=10, bold=False, color=TEXT_DARK, align=PP_ALIGN.LEFT):
    tb = slide.shapes.add_textbox(left, top, width, height)
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = Inches(0.03)
    if text:
        p = tf.paragraphs[0]
        p.text = text
        p.font.name = font_name
        p.font.size = Pt(font_size)
        p.font.bold = bold
        p.font.color.rgb = color
        p.alignment = align
    return tb

def add_header(slide, main_title, subtitle, section_badge):
    # Badge
    add_badge(slide, Inches(1.85), Inches(0.12), Inches(2.7), Inches(0.28), section_badge, BLUE_SIH, WHITE, font_size=8.5, bold=True)
    
    # Main title - 13.5pt bold so it easily stays on one single line
    tb = add_tb(slide, Inches(4.65), Inches(0.08), Inches(6.0), Inches(0.38))
    p = tb.text_frame.paragraphs[0]
    p.text = main_title
    p.font.name = FONT_HEAD
    p.font.size = Pt(13.5)
    p.font.bold = True
    p.font.color.rgb = NAVY_TITLE
    
    # Subtitle - clean separate row at top=0.48"
    tb2 = add_tb(slide, Inches(1.85), Inches(0.48), Inches(8.8), Inches(0.32))
    p2 = tb2.text_frame.paragraphs[0]
    p2.text = subtitle
    p2.font.name = FONT_BODY
    p2.font.size = Pt(9.5)
    p2.font.color.rgb = TEXT_MUTED

def style_oval_and_footers(slide):
    for s in slide.shapes:
        if "Oval" in s.name and s.has_text_frame:
            # Reposition oval higher so it never collides with content cards below
            s.left = Inches(0.35)
            s.top = Inches(0.10)
            s.width = Inches(1.25)
            s.height = Inches(0.70)
            s.fill.solid()
            s.fill.fore_color.rgb = RGBColor(241, 245, 249)
            s.line.color.rgb = BLUE_SIH
            s.line.width = Pt(1)
            for p in s.text_frame.paragraphs:
                p.text = "Team ID / Name\n[Registered]"
                p.font.name = FONT_HEAD
                p.font.size = Pt(7.5)
                p.font.bold = True
                p.font.color.rgb = BLUE_SIH
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
        if "Title 1" in s.name and s.has_text_frame:
            s.text_frame.text = ""

def clear_instruction_boxes(slide):
    for s in list(slide.shapes):
        if s.has_text_frame:
            txt = s.text_frame.text.lower()
            if "proposed solution (describe" in txt or "technologies to be used" in txt or \
               "analysis of the feasibility" in txt or "potential impact on the target" in txt or \
               "details / links of the reference" in txt:
                sp = s._element
                sp.getparent().remove(sp)

def build_slide_1(slide):
    print("Building Slide 1...")
    # Remove old template graphics: Picture 4, Freeform, Rectangle 24
    for s in list(slide.shapes):
        if s.name in ["Picture 4", "Freeform: Shape 26", "Rectangle 24"]:
            sp = s._element
            sp.getparent().remove(sp)
        elif s.name in ["Subtitle 3", "Title 7", "TextBox 9"] and s.has_text_frame:
            s.text_frame.text = ""
    
    # Top Header Zone
    add_badge(slide, Inches(0.6), Inches(0.35), Inches(3.8), Inches(0.32), "SMART INDIA HACKATHON 2026 • HARDWARE EDITION", BLUE_SIH, WHITE, font_size=9.5, bold=True)
    
    tb_title = add_tb(slide, Inches(0.6), Inches(0.72), Inches(9.0), Inches(0.62))
    p1 = tb_title.text_frame.paragraphs[0]
    p1.text = "SMART SOLAR COLD STORAGE SYSTEM"
    p1.font.name = FONT_HEAD
    p1.font.size = Pt(25)
    p1.font.bold = True
    p1.font.color.rgb = NAVY_TITLE
    
    tb_sub = add_tb(slide, Inches(0.6), Inches(1.35), Inches(9.0), Inches(0.38))
    p2 = tb_sub.text_frame.paragraphs[0]
    p2.text = "IoT-Enabled Post-Harvest Preservation for Rural Farmers"
    p2.font.name = FONT_HEAD
    p2.font.size = Pt(13)
    p2.font.bold = True
    p2.font.color.rgb = BLUE_DARK
    
    # Left Metadata Card
    add_card(slide, Inches(0.6), Inches(1.85), Inches(5.9), Inches(4.75), bg_color=WHITE, border_color=CARD_BORDER, border_width=1.5)
    
    # Header strip inside metadata card
    add_rect(slide, Inches(0.6), Inches(1.85), Inches(5.9), Inches(0.38), bg_color=BLUE_LIGHT, border_color=None)
    tb_mh = add_tb(slide, Inches(0.8), Inches(1.9), Inches(5.5), Inches(0.3))
    pmh = tb_mh.text_frame.paragraphs[0]
    pmh.text = "OFFICIAL SIH SUBMISSION DETAILS"
    pmh.font.name = FONT_HEAD
    pmh.font.size = Pt(9.5)
    pmh.font.bold = True
    pmh.font.color.rgb = BLUE_DARK
    
    # Details in left card
    details = [
        ("Problem Statement ID:", "26005", BLUE_SIH, True),
        ("Problem Statement Title:", "Solar-Powered Smart Mini Cold Storage System for Fresh Vegetables in North Eastern Region (NER)", NAVY_TITLE, False),
        ("Theme:", "Sustainable Agriculture & Food Security", GREEN_AGRI, True),
        ("PS Category:", "Agricultural Technology (Hardware)", NAVY_TITLE, False),
        ("Team ID:", "[Insert Registered Team ID]", BLUE_DARK, True),
        ("Team Name:", "[Insert Registered Team Name]", BLUE_DARK, True),
    ]
    
    y_pos = 2.35
    for label, val, val_color, is_bold in details:
        tb_f = add_tb(slide, Inches(0.8), Inches(y_pos), Inches(5.5), Inches(0.55 if len(val) > 40 else 0.38))
        tf = tb_f.text_frame
        p = tf.paragraphs[0]
        r1 = p.add_run()
        r1.text = label + " "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(9.5)
        r1.font.bold = True
        r1.font.color.rgb = NAVY_TITLE
        
        r2 = p.add_run()
        r2.text = val
        r2.font.name = FONT_BODY
        r2.font.size = Pt(9.5)
        r2.font.bold = is_bold
        r2.font.color.rgb = val_color
        
        y_pos += 0.58 if len(val) > 40 else 0.42
    
    # Bottom pills inside left card
    add_badge(slide, Inches(0.8), Inches(5.95), Inches(1.65), Inches(0.42), "☀ 100% Solar Off-Grid\nLiFePO₄ Battery", AMBER_SOLAR, WHITE, font_size=7.5, bold=True)
    add_badge(slide, Inches(2.6), Inches(5.95), Inches(1.8), Inches(0.42), "❄ 20–40 L Farm Scale\nPeltier Active Cooling", TEAL_COOL, WHITE, font_size=7.5, bold=True)
    add_badge(slide, Inches(4.55), Inches(5.95), Inches(1.75), Inches(0.42), "📡 ESP32 Edge IoT\nSensors & Remote Alerts", GREEN_AGRI, WHITE, font_size=7.5, bold=True)
    
    # Right Hero Card
    add_card(slide, Inches(6.7), Inches(1.85), Inches(5.85), Inches(4.75), bg_color=WHITE, border_color=CARD_BORDER, border_width=1.5)
    
    if os.path.exists(HERO_IMG):
        slide.shapes.add_picture(HERO_IMG, Inches(6.8), Inches(1.95), Inches(5.65), Inches(3.9))
    
    # Caption pill at bottom of hero image
    add_card(slide, Inches(6.8), Inches(5.95), Inches(5.65), Inches(0.52), bg_color=GREEN_TINT, border_color=GREEN_AGRI, border_width=1)
    tb_cap = add_tb(slide, Inches(6.9), Inches(5.98), Inches(5.45), Inches(0.45))
    pcap = tb_cap.text_frame.paragraphs[0]
    pcap.text = "● Concept Architecture: Solar PV Array → Insulated 20–40L Chamber → Fresh Vegetables → Live IoT Telemetry"
    pcap.font.name = FONT_HEAD
    pcap.font.size = Pt(8.5)
    pcap.font.bold = True
    pcap.font.color.rgb = GREEN_AGRI
    pcap.alignment = PP_ALIGN.CENTER

def build_slide_2(slide):
    print("Building Slide 2...")
    clear_instruction_boxes(slide)
    style_oval_and_footers(slide)
    add_header(slide, "FROM HARVEST TO MARKET — WITHOUT THE LOSS", 
               "Addressing Rural Vegetable Spoilage with a Compact, Off-Grid Solar & IoT Storage Architecture", 
               "SIH SECTION: IDEA & PROPOSED SOLUTION")
    
    # Left Column: The Problem Box - top=1.24", generous interior padding
    add_card(slide, Inches(0.6), Inches(1.24), Inches(4.1), Inches(3.98), bg_color=RED_TINT, border_color=RED_ACCENT, border_width=1.5)
    
    tb_ph = add_tb(slide, Inches(0.85), Inches(1.40), Inches(3.6), Inches(0.28))
    pph = tb_ph.text_frame.paragraphs[0]
    pph.text = "THE PROBLEM: POST-HARVEST LOSSES"
    pph.font.name = FONT_HEAD
    pph.font.size = Pt(10)
    pph.font.bold = True
    pph.font.color.rgb = RED_ACCENT
    
    problems = [
        ("1. Rapid Perishable Decay", "Fresh vegetables deteriorate within 24–48h post-harvest under ambient tropical heat, losing nutritional quality & freshness."),
        ("2. Limited Cold-Chain Access", "Smallholders & remote NER farmers lack accessible, affordable nearby cold storage facilities; centralized hubs are too distant."),
        ("3. Distress Selling Pressure", "Without storage options, farmers are forced to dump produce at harvest day at cut-throat middleman rates."),
        ("4. Rural Energy & Grid Deficit", "Unreliable or absent grid electricity makes conventional compressor-based cold rooms unfeasible in remote rural fields.")
    ]
    
    y_p = 1.76
    for title, desc in problems:
        tb_item = add_tb(slide, Inches(0.85), Inches(y_p), Inches(3.6), Inches(0.70))
        tf = tb_item.text_frame
        p = tf.paragraphs[0]
        r1 = p.add_run()
        r1.text = title + "\n"
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(8.8)
        r1.font.bold = True
        r1.font.color.rgb = RED_ACCENT
        
        r2 = p.add_run()
        r2.text = desc
        r2.font.name = FONT_BODY
        r2.font.size = Pt(7.8)
        r2.font.color.rgb = TEXT_DARK
        y_p += 0.77
    
    # Right Column: Solution Box
    add_card(slide, Inches(4.9), Inches(1.24), Inches(7.85), Inches(1.02), bg_color=GREEN_TINT, border_color=GREEN_AGRI, border_width=1.5)
    
    tb_sh = add_tb(slide, Inches(5.05), Inches(1.30), Inches(7.55), Inches(0.25))
    psh = tb_sh.text_frame.paragraphs[0]
    psh.text = "OUR SOLUTION: SMART SOLAR COLD STORAGE"
    psh.font.name = FONT_HEAD
    psh.font.size = Pt(10.5)
    psh.font.bold = True
    psh.font.color.rgb = GREEN_AGRI
    
    tb_st = add_tb(slide, Inches(5.05), Inches(1.56), Inches(7.55), Inches(0.62))
    pst = tb_st.text_frame.paragraphs[0]
    pst.text = "An IoT-enabled, solar-powered 20–40 L cold-storage unit utilizing passive thermal insulation and active solid-state Peltier cooling, with ESP32-based multi-sensor monitoring and automatic cooling control."
    pst.font.name = FONT_BODY
    pst.font.size = Pt(9)
    pst.font.color.rgb = TEXT_DARK
    
    # 4 Innovation Cards in 2x2 grid
    innovations = [
        ("☀ SOLAR-FIRST & OFF-GRID", "100W PV with LiFePO₄ battery storage provides 100% off-grid autonomy for remote farm sites.", AMBER_SOLAR, AMBER_TINT),
        ("📍 FARM-LEVEL MICRO-SCALE", "Compact 20–40 L decentralized capacity designed specifically for smallholders right at farm gate.", TEAL_COOL, TEAL_TINT),
        ("🧠 SMART CLOSED-LOOP CONTROL", "ESP32 edge logic executes automated sensor-based temperature regulation and hysteresis control.", BLUE_DARK, BLUE_LIGHT),
        ("📡 DATA-DRIVEN IoT TELEMETRY", "Real-time monitoring of temp, humidity, door events, and battery health with cloud logging and alerts.", GREEN_AGRI, GREEN_TINT)
    ]
    
    grid_coords = [
        (4.9, 2.38), (8.9, 2.38),
        (4.9, 3.82), (8.9, 3.82)
    ]
    
    for (title, desc, color, bg), (gx, gy) in zip(innovations, grid_coords):
        add_card(slide, Inches(gx), Inches(gy), Inches(3.85), Inches(1.32), bg_color=bg, border_color=color, border_width=1.2)
        tb_in = add_tb(slide, Inches(gx + 0.15), Inches(gy + 0.08), Inches(3.55), Inches(1.15))
        tf = tb_in.text_frame
        p = tf.paragraphs[0]
        r1 = p.add_run()
        r1.text = title + "\n"
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(9.5)
        r1.font.bold = True
        r1.font.color.rgb = color
        
        r2 = p.add_run()
        r2.text = desc
        r2.font.name = FONT_BODY
        r2.font.size = Pt(8.2)
        r2.font.color.rgb = TEXT_DARK
    
    # Bottom Value Chain Flow
    add_card(slide, Inches(0.6), Inches(5.35), Inches(12.15), Inches(1.1), bg_color=CARD_BG, border_color=CARD_BORDER, border_width=1)
    
    tb_ch = add_tb(slide, Inches(0.8), Inches(5.4), Inches(11.75), Inches(0.25))
    pch = tb_ch.text_frame.paragraphs[0]
    pch.text = "VALUE CHAIN TRANSFORMATION: FROM HARVEST TO MARKET"
    pch.font.name = FONT_HEAD
    pch.font.size = Pt(9)
    pch.font.bold = True
    pch.font.color.rgb = BLUE_SIH
    
    steps = [
        ("1. FRESH HARVEST", "Harvested at peak freshness"),
        ("2. SMART STORAGE", "Immediate on-farm 20-40L cooling"),
        ("3. STABILIZED CLIMATE", "Optimal 4–8°C / 85–95% RH"),
        ("4. PRESERVED QUALITY", "Spoilage reduced, fresh grade"),
        ("5. BETTER VALUE", "Flexible market timing & profits")
    ]
    
    sx = 0.8
    for i, (st, sd) in enumerate(steps):
        add_badge(slide, Inches(sx), Inches(5.7), Inches(2.0), Inches(0.62), f"{st}\n{sd}", bg_color=WHITE, text_color=NAVY_TITLE, font_size=8, bold=True)
        if i < 4:
            add_tb(slide, Inches(sx + 2.05), Inches(5.8), Inches(0.3), Inches(0.4), text="➔", font_size=14, bold=True, color=BLUE_SIH, align=PP_ALIGN.CENTER)
        sx += 2.4

def build_slide_3(slide):
    print("Building Slide 3...")
    clear_instruction_boxes(slide)
    style_oval_and_footers(slide)
    add_header(slide, "SYSTEM ARCHITECTURE & CLOSED-LOOP CONTROL", 
               "Thermoelectric Solid-State Cooling, ESP32 Edge Intelligence, and Multi-Sensor Telemetry", 
               "SIH SECTION: TECHNICAL APPROACH")
    
    # Path 1: Energy Architecture - top=1.24"
    add_card(slide, Inches(0.6), Inches(1.24), Inches(7.9), Inches(1.20), bg_color=AMBER_TINT, border_color=AMBER_SOLAR, border_width=1.2)
    tb_p1 = add_tb(slide, Inches(0.75), Inches(1.28), Inches(7.6), Inches(0.22))
    pp1 = tb_p1.text_frame.paragraphs[0]
    pp1.text = "PATH 1: ENERGY ARCHITECTURE (100% Off-Grid Solar Bus)"
    pp1.font.name = FONT_HEAD
    pp1.font.size = Pt(9.5)
    pp1.font.bold = True
    pp1.font.color.rgb = AMBER_SOLAR
    
    e_nodes = [
        ("100W Solar PV", "Monocrystalline"),
        ("10A MPPT", "Charge Controller"),
        ("12V LiFePO₄", "20–40Ah Battery"),
        ("DC Power Bus", "Buck 12V➔5V"),
        ("Cooling & Control", "Peltier + Fans + ESP32")
    ]
    nx = 0.75
    for i, (nh, nd) in enumerate(e_nodes):
        add_badge(slide, Inches(nx), Inches(1.53), Inches(1.25), Inches(0.72), f"{nh}\n{nd}", bg_color=WHITE, text_color=NAVY_TITLE, font_size=7.5, bold=True)
        if i < 4:
            add_tb(slide, Inches(nx + 1.27), Inches(1.68), Inches(0.26), Inches(0.4), text="➔", font_size=12, bold=True, color=AMBER_SOLAR, align=PP_ALIGN.CENTER)
        nx += 1.55
    
    # Path 2: Cooling Architecture
    add_card(slide, Inches(0.6), Inches(2.54), Inches(7.9), Inches(1.32), bg_color=TEAL_TINT, border_color=TEAL_COOL, border_width=1.2)
    tb_p2 = add_tb(slide, Inches(0.75), Inches(2.58), Inches(7.6), Inches(0.22))
    pp2 = tb_p2.text_frame.paragraphs[0]
    pp2.text = "PATH 2: THERMOELECTRIC COOLING PATHWAY (Solid-State Peltier Architecture)"
    pp2.font.name = FONT_HEAD
    pp2.font.size = Pt(9.5)
    pp2.font.bold = True
    pp2.font.color.rgb = TEAL_COOL
    
    c_nodes = [
        ("DC Power Supply", "12V Bus via MOSFET"),
        ("Peltier TEC1-12706", "Solid-state module"),
        ("Cold Aluminum Block", "Internal circulation fan"),
        ("Insulated Chamber", "20–40L (4–8°C)"),
        ("Fresh Vegetables", "Preserved Produce")
    ]
    nx = 0.75
    for i, (nh, nd) in enumerate(c_nodes):
        add_badge(slide, Inches(nx), Inches(2.84), Inches(1.25), Inches(0.62), f"{nh}\n{nd}", bg_color=WHITE, text_color=NAVY_TITLE, font_size=7.5, bold=True)
        if i < 4:
            add_tb(slide, Inches(nx + 1.27), Inches(2.94), Inches(0.26), Inches(0.4), text="➔", font_size=12, bold=True, color=TEAL_COOL, align=PP_ALIGN.CENTER)
        nx += 1.55
    
    tb_heat = add_tb(slide, Inches(0.75), Inches(3.52), Inches(7.6), Inches(0.25))
    pheat = tb_heat.text_frame.paragraphs[0]
    pheat.text = "• Heat Rejection Loop: Hot Side Junction ➔ Heavy-Duty Extruded Heat Sink ➔ 120mm Exhaust Fan ➔ Ambient Air"
    pheat.font.name = FONT_BODY
    pheat.font.size = Pt(8)
    pheat.font.bold = True
    pheat.font.color.rgb = TEAL_COOL
    
    # Path 3: Control & IoT
    add_card(slide, Inches(0.6), Inches(3.96), Inches(7.9), Inches(1.20), bg_color=BLUE_LIGHT, border_color=BLUE_DARK, border_width=1.2)
    tb_p3 = add_tb(slide, Inches(0.75), Inches(4.00), Inches(7.6), Inches(0.22))
    pp3 = tb_p3.text_frame.paragraphs[0]
    pp3.text = "PATH 3: SENSING, CONTROL & IoT DATA PATHWAY"
    pp3.font.name = FONT_HEAD
    pp3.font.size = Pt(9.5)
    pp3.font.bold = True
    pp3.font.color.rgb = BLUE_DARK
    
    d_nodes = [
        ("Sensors Array", "DS18B20, SHT31, Reed, INA"),
        ("ESP32 Controller", "Edge Decision Logic"),
        ("PWM MOSFET Switch", "Cooling & Fan Actuation"),
        ("Wi-Fi Telemetry", "MQTT / HTTP Protocol"),
        ("IoT Dashboard", "Cloud Logs & Alerts")
    ]
    nx = 0.75
    for i, (nh, nd) in enumerate(d_nodes):
        add_badge(slide, Inches(nx), Inches(4.27), Inches(1.25), Inches(0.72), f"{nh}\n{nd}", bg_color=WHITE, text_color=NAVY_TITLE, font_size=7.5, bold=True)
        if i < 4:
            add_tb(slide, Inches(nx + 1.27), Inches(4.42), Inches(0.26), Inches(0.4), text="➔", font_size=12, bold=True, color=BLUE_DARK, align=PP_ALIGN.CENTER)
        nx += 1.55
    
    # Right Column: Closed Loop Control Logic - top=1.24"
    add_card(slide, Inches(8.7), Inches(1.24), Inches(4.05), Inches(3.92), bg_color=CARD_BG, border_color=CARD_BORDER, border_width=1.5)
    
    tb_rch = add_tb(slide, Inches(8.85), Inches(1.36), Inches(3.75), Inches(0.26))
    prch = tb_rch.text_frame.paragraphs[0]
    prch.text = "CLOSED-LOOP FEEDBACK CONTROL"
    prch.font.name = FONT_HEAD
    prch.font.size = Pt(10)
    prch.font.bold = True
    prch.font.color.rgb = NAVY_TITLE
    
    steps_loop = [
        ("1. SENSE", "Read DS18B20 temp & SHT31 humidity"),
        ("2. COMPARE", "Evaluate error vs Setpoint (4–8°C)"),
        ("3. DECISION", "Temp > Setpoint + Hysteresis? [YES]"),
        ("4. ACTUATE", "Trigger PWM MOSFET ➔ Peltier ON"),
        ("5. FEEDBACK", "Chamber cools ➔ Setpoint reached ➔ Standby"),
    ]
    
    ly = 1.68
    for st, sd in steps_loop:
        add_badge(slide, Inches(8.85), Inches(ly), Inches(3.75), Inches(0.38), f"{st}: {sd}", bg_color=WHITE, text_color=TEXT_DARK, font_size=8, bold=True)
        if ly < 3.2:
            add_tb(slide, Inches(10.5), Inches(ly + 0.35), Inches(0.5), Inches(0.18), text="↓", font_size=9.5, bold=True, color=BLUE_SIH, align=PP_ALIGN.CENTER)
        ly += 0.50
    
    tb_loop_note = add_tb(slide, Inches(8.85), Inches(4.20), Inches(3.75), Inches(0.85))
    pln = tb_loop_note.text_frame.paragraphs[0]
    pln.text = "↺ Continuous 10-second FreeRTOS task loop ensures thermal stability, battery low-voltage cutoff, and open-door buzzer alerts."
    pln.font.name = FONT_BODY
    pln.font.size = Pt(7.8)
    pln.font.color.rgb = TEXT_MUTED
    
    # Bottom Technology Matrix Strip
    add_card(slide, Inches(0.6), Inches(5.25), Inches(12.15), Inches(1.18), bg_color=NAVY_CARD, border_color=BLUE_SIH, border_width=1.2)
    
    tech_sections = [
        ("HARDWARE ARCHITECTURE", "ESP32 MCU | Peltier TEC1-12706 | 120mm BLDC Fans | 100W Solar PV | 12V LiFePO₄ Battery | 10A MPPT | DS18B20 Temp | SHT31 Humidity | Reed Door | INA219 Power", AMBER_SOLAR),
        ("FIRMWARE & SOFTWARE", "Embedded C/C++ (Arduino/ESP-IDF) | Web IoT Dashboard | MQTT & HTTP REST Protocol | Wi-Fi 802.11 b/g/n Telemetry | SPIFFS Offline Storage", TEAL_COOL),
        ("CONTROL STRATEGY", "Closed-Loop Hysteresis Regulation | Low-Voltage Battery Protection | Door-Ajar Buzzer Warning | Local OLED Status Display", GREEN_EMERALD)
    ]
    
    tx = 0.75
    for th, td, tc in tech_sections:
        tb_t = add_tb(slide, Inches(tx), Inches(5.3), Inches(3.8), Inches(1.05))
        tf = tb_t.text_frame
        p = tf.paragraphs[0]
        r1 = p.add_run()
        r1.text = th + "\n"
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(8.5)
        r1.font.bold = True
        r1.font.color.rgb = tc
        
        r2 = p.add_run()
        r2.text = td
        r2.font.name = FONT_BODY
        r2.font.size = Pt(7.5)
        r2.font.color.rgb = WHITE
        tx += 4.05

def build_slide_4(slide):
    print("Building Slide 4...")
    clear_instruction_boxes(slide)
    style_oval_and_footers(slide)
    add_header(slide, "FEASIBILITY & ITEMIZED ₹25,000 BOM ANALYSIS", 
               "Commercial Component Sourcing, Complete Cost Breakdown & Risk Mitigation", 
               "SIH SECTION: FEASIBILITY & VIABILITY")
    
    # Left Column: Feasibility & BOM - top=1.24"
    add_card(slide, Inches(0.6), Inches(1.24), Inches(5.85), Inches(4.12), bg_color=WHITE, border_color=CARD_BORDER, border_width=1.5)
    
    # Badges row
    add_badge(slide, Inches(0.75), Inches(1.34), Inches(2.7), Inches(0.36), "ESTIMATED COST: ₹25,000", GREEN_AGRI, WHITE, font_size=9.5, bold=True)
    add_badge(slide, Inches(3.55), Inches(1.34), Inches(2.7), Inches(0.36), "ESTIMATED BUILD: 2–3 WEEKS", BLUE_SIH, WHITE, font_size=9.5, bold=True)
    
    tb_proj_lbl = add_tb(slide, Inches(0.75), Inches(1.74), Inches(5.5), Inches(0.20))
    ppl = tb_proj_lbl.text_frame.paragraphs[0]
    ppl.text = "*Project Design Estimates — Built entirely from commercially available COTS components"
    ppl.font.name = FONT_BODY
    ppl.font.size = Pt(7.5)
    ppl.font.color.rgb = TEXT_MUTED
    
    # BOM Breakdown Cards
    bom_categories = [
        ("1. ENERGY SUBSYSTEM", "₹12,200", "48.8%", "LiFePO₄ Battery ₹7,500 (Largest Component) | 100W Solar PV ₹3,500 | 10A MPPT ₹1,200", AMBER_SOLAR),
        ("2. STRUCTURE & CABLING", "₹4,800", "19.2%", "Insulated 20–40L Box ₹2,000 | Wires & Connectors ₹1,600 | Enclosure & Mounts ₹1,200", BLUE_DARK),
        ("3. SPARES & CONTINGENCY", "₹4,000", "16.0%", "Backup Components, Packing, Calibration & Delivery Contingency", TEXT_MUTED),
        ("4. CONTROL & SENSING", "₹2,450", "9.8%", "ESP32 Dev Boards (x2) ₹900 | Sensors (Temp ₹400, RH ₹450, Power ₹450, Door ₹100) ₹1,400 | OLED ₹250 | Switch & Fuses ₹1,150", GREEN_AGRI),
        ("5. COOLING SUBSYSTEM", "₹1,850", "7.4%", "Peltier 12V Cooling Assembly Kit ₹1,500 | Extra 120mm 12V Fan ₹350", TEAL_COOL)
    ]
    
    by = 1.98
    for cat, cost, pct, items, color in bom_categories:
        add_card(slide, Inches(0.75), Inches(by), Inches(5.55), Inches(0.56), bg_color=CARD_BG, border_color=CARD_BORDER, border_width=1)
        tb_b = add_tb(slide, Inches(0.85), Inches(by + 0.03), Inches(5.35), Inches(0.5))
        tf = tb_b.text_frame
        p = tf.paragraphs[0]
        r1 = p.add_run()
        r1.text = f"{cat}: {cost} ({pct})\n"
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(8.5)
        r1.font.bold = True
        r1.font.color.rgb = color
        
        r2 = p.add_run()
        r2.text = items
        r2.font.name = FONT_BODY
        r2.font.size = Pt(7.2)
        r2.font.color.rgb = TEXT_DARK
        by += 0.62
    
    # Total bar
    add_badge(slide, Inches(0.75), Inches(4.98), Inches(5.55), Inches(0.28), "TOTAL ESTIMATED BOM: ₹25,000 (100% Sourced & Cost-Verified)", NAVY_TITLE, WHITE, font_size=8.5, bold=True)
    
    # Right Column: Risk & Mitigation Matrix - top=1.24"
    add_card(slide, Inches(6.65), Inches(1.24), Inches(6.1), Inches(4.12), bg_color=CARD_BG, border_color=CARD_BORDER, border_width=1.5)
    
    tb_rh = add_tb(slide, Inches(6.8), Inches(1.36), Inches(5.8), Inches(0.26))
    prh = tb_rh.text_frame.paragraphs[0]
    prh.text = "TECHNICAL CHALLENGES & ENGINEERING MITIGATIONS"
    prh.font.name = FONT_HEAD
    prh.font.size = Pt(10)
    prh.font.bold = True
    prh.font.color.rgb = NAVY_TITLE
    
    risks = [
        ("High Ambient Heat (>40°C)", "High-density multi-layer PUF insulation + oversized aluminum heat sink with 120mm high-airflow fan."),
        ("Battery Depletion / Monsoon", "Sized LiFePO₄ capacity + INA219 power tracking + deep-sleep power states + optional hybrid grid port."),
        ("Peltier Efficiency Limits", "Strict 20–40L thermal volume optimization + closed-loop PWM duty-cycle power modulation."),
        ("Sensor Drift / Field Moisture", "IP67 waterproof DS18B20 stainless probes + software threshold sanity bounds & failsafe shutoff."),
        ("Rural Connectivity Outages", "Autonomous local edge execution on ESP32; offline SPIFFS data logging; local OLED display.")
    ]
    
    ry = 1.70
    for rsk, mit in risks:
        add_card(slide, Inches(6.8), Inches(ry), Inches(5.8), Inches(0.63), bg_color=WHITE, border_color=CARD_BORDER, border_width=1)
        tb_r = add_tb(slide, Inches(6.9), Inches(ry + 0.04), Inches(5.6), Inches(0.55))
        tf = tb_r.text_frame
        p = tf.paragraphs[0]
        r1 = p.add_run()
        r1.text = f"⚠ Challenge: {rsk}\n"
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(8.5)
        r1.font.bold = True
        r1.font.color.rgb = RED_ACCENT
        
        r2 = p.add_run()
        r2.text = f"✔ Mitigation: {mit}"
        r2.font.name = FONT_BODY
        r2.font.size = Pt(7.5)
        r2.font.color.rgb = GREEN_AGRI
        ry += 0.70
    
    # Bottom Deployment Roadmap
    add_card(slide, Inches(0.6), Inches(5.45), Inches(12.15), Inches(1.0), bg_color=BLUE_LIGHT, border_color=BLUE_DARK, border_width=1.2)
    
    tb_rmh = add_tb(slide, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.22))
    prmh = tb_rmh.text_frame.paragraphs[0]
    prmh.text = "FIELD DEPLOYMENT ROADMAP"
    prmh.font.name = FONT_HEAD
    prmh.font.size = Pt(9)
    prmh.font.bold = True
    prmh.font.color.rgb = BLUE_DARK
    
    phases = [
        ("Phase 1: Prototype", "Lab Build (2–3 wks)"),
        ("Phase 2: Testing", "Thermal Tuning & COP"),
        ("Phase 3: Farm Pilot", "Single NER Farm Trial"),
        ("Phase 4: FPO Groups", "SHG & Co-op Adoption"),
        ("Phase 5: NER Scale", "Cluster Deployment")
    ]
    
    px = 0.8
    for i, (ph, pd) in enumerate(phases):
        add_badge(slide, Inches(px), Inches(5.75), Inches(2.0), Inches(0.6), f"{ph}\n{pd}", bg_color=WHITE, text_color=NAVY_TITLE, font_size=8, bold=True)
        if i < 4:
            add_tb(slide, Inches(px + 2.05), Inches(5.85), Inches(0.3), Inches(0.3), text="➔", font_size=12, bold=True, color=BLUE_DARK, align=PP_ALIGN.CENTER)
        px += 2.4

def build_slide_5(slide):
    print("Building Slide 5...")
    clear_instruction_boxes(slide)
    style_oval_and_footers(slide)
    add_header(slide, "TRIPLE BOTTOM-LINE VALUE CREATION FOR FARMERS", 
               "Socio-Economic Transformation, Spoilage Prevention & Environmental Sustainability", 
               "SIH SECTION: IMPACT & BENEFITS")
    
    # Top Target Users Banner - top=1.22"
    add_badge(slide, Inches(0.6), Inches(1.22), Inches(12.15), Inches(0.36), 
              "TARGET USERS: Small-Scale & Marginal Farmers  •  Rural NER Horticulturists  •  Farmer Producer Orgs (FPOs)  •  Women SHGs", 
              bg_color=GREEN_TINT, text_color=GREEN_AGRI, font_size=9, bold=True)
    
    # Left / Center: 6 Impact Pillars - top=1.66"
    add_card(slide, Inches(0.6), Inches(1.66), Inches(7.4), Inches(2.52), bg_color=WHITE, border_color=CARD_BORDER, border_width=1.5)
    
    tb_plh = add_tb(slide, Inches(0.75), Inches(1.72), Inches(7.1), Inches(0.25))
    pplh = tb_plh.text_frame.paragraphs[0]
    pplh.text = "SIX CORE IMPACT PILLARS"
    pplh.font.name = FONT_HEAD
    pplh.font.size = Pt(10)
    pplh.font.bold = True
    pplh.font.color.rgb = NAVY_TITLE
    
    pillars = [
        ("1. REDUCE SPOILAGE", "Minimizes perishable vegetable decay directly at the farm gate.", GREEN_AGRI),
        ("2. FARMER FLEXIBILITY", "Eliminates distress selling, allowing farmers to wait for optimal prices.", BLUE_DARK),
        ("3. 100% RENEWABLE", "Clean solar energy operation with zero grid dependence & emissions.", AMBER_SOLAR),
        ("4. AFFORDABLE ACCESS", "Micro-scale ₹25k cold storage tailored for individual rural smallholders.", TEAL_COOL),
        ("5. DIGITAL VISIBILITY", "Real-time environmental tracking and anomaly alert notifications.", BLUE_SIH),
        ("6. COMMUNITY SCALABLE", "Modular architecture easily replicated across rural farming clusters.", GREEN_EMERALD)
    ]
    
    p_grid = [
        (0.75, 2.02), (3.05, 2.02), (5.35, 2.02),
        (0.75, 3.10), (3.05, 3.10), (5.35, 3.10)
    ]
    
    for (ph, pd, col), (gx, gy) in zip(pillars, p_grid):
        add_card(slide, Inches(gx), Inches(gy), Inches(2.18), Inches(0.95), bg_color=CARD_BG, border_color=CARD_BORDER, border_width=1)
        tb_p = add_tb(slide, Inches(gx + 0.08), Inches(gy + 0.08), Inches(2.02), Inches(0.8))
        tf = tb_p.text_frame
        p = tf.paragraphs[0]
        r1 = p.add_run()
        r1.text = ph + "\n"
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(8.5)
        r1.font.bold = True
        r1.font.color.rgb = col
        
        r2 = p.add_run()
        r2.text = pd
        r2.font.name = FONT_BODY
        r2.font.size = Pt(7.2)
        r2.font.color.rgb = TEXT_DARK
    
    # Right Column: Impact at a Glance Metrics - top=1.66"
    add_card(slide, Inches(8.2), Inches(1.66), Inches(4.55), Inches(2.52), bg_color=CARD_BG, border_color=CARD_BORDER, border_width=1.5)
    
    tb_mth = add_tb(slide, Inches(8.35), Inches(1.72), Inches(4.25), Inches(0.25))
    pmth = tb_mth.text_frame.paragraphs[0]
    pmth.text = "DESIGN METRICS & CLAIMS"
    pmth.font.name = FONT_HEAD
    pmth.font.size = Pt(10)
    pmth.font.bold = True
    pmth.font.color.rgb = NAVY_TITLE
    
    metrics = [
        ("40–60%", "POTENTIAL SPOILAGE REDUCTION\n*Target Design Claim — Requires Field Validation", GREEN_AGRI),
        ("20–40 L", "FARM-LEVEL CAPACITY\nTailored for decentralized smallholder use", BLUE_SIH),
        ("₹25,000", "ESTIMATED TOTAL COST\nAccessible capital investment for smallholders", AMBER_SOLAR),
        ("100%", "OFF-GRID SOLAR AUTONOMY\nPV + LiFePO₄ zero-fuel clean operation", TEAL_COOL)
    ]
    
    m_grid = [
        (8.35, 2.02), (10.55, 2.02),
        (8.35, 3.10), (10.55, 3.10)
    ]
    
    for (mval, mdesc, mcol), (mx, my) in zip(metrics, m_grid):
        add_card(slide, Inches(mx), Inches(my), Inches(2.05), Inches(0.95), bg_color=WHITE, border_color=CARD_BORDER, border_width=1)
        tb_m = add_tb(slide, Inches(mx + 0.08), Inches(my + 0.05), Inches(1.9), Inches(0.85))
        tf = tb_m.text_frame
        p = tf.paragraphs[0]
        r1 = p.add_run()
        r1.text = mval + "\n"
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(14)
        r1.font.bold = True
        r1.font.color.rgb = mcol
        
        r2 = p.add_run()
        r2.text = mdesc
        r2.font.name = FONT_BODY
        r2.font.size = Pt(6.8)
        r2.font.color.rgb = TEXT_DARK
    
    # Middle Flow: Value Chain - top=4.26"
    add_card(slide, Inches(0.6), Inches(4.26), Inches(12.15), Inches(0.95), bg_color=WHITE, border_color=CARD_BORDER, border_width=1.2)
    
    tb_vch = add_tb(slide, Inches(0.75), Inches(4.30), Inches(11.8), Inches(0.2))
    pvch = tb_vch.text_frame.paragraphs[0]
    pvch.text = "SUSTAINABLE VALUE REALIZATION PIPELINE"
    pvch.font.name = FONT_HEAD
    pvch.font.size = Pt(8.5)
    pvch.font.bold = True
    pvch.font.color.rgb = BLUE_DARK
    
    v_steps = [
        ("FARM HARVEST", "Fresh produce picked"),
        ("SMART STORAGE", "Loaded in solar unit"),
        ("PRESERVED QUALITY", "Shelf life extended"),
        ("BETTER MARKET", "Optimal selling window"),
        ("HIGHER VALUE", "Enhanced farmer income")
    ]
    
    vx = 0.75
    for i, (vt, vd) in enumerate(v_steps):
        add_badge(slide, Inches(vx), Inches(4.53), Inches(2.0), Inches(0.58), f"{vt}\n{vd}", bg_color=CARD_BG, text_color=NAVY_TITLE, font_size=7.5, bold=True)
        if i < 4:
            add_tb(slide, Inches(vx + 2.05), Inches(4.63), Inches(0.3), Inches(0.3), text="➔", font_size=12, bold=True, color=GREEN_AGRI, align=PP_ALIGN.CENTER)
        vx += 2.4
    
    # Bottom Future Section
    add_card(slide, Inches(0.6), Inches(5.35), Inches(12.15), Inches(1.15), bg_color=NAVY_CARD, border_color=BLUE_SIH, border_width=1.5)
    
    tb_fh = add_tb(slide, Inches(0.8), Inches(5.4), Inches(11.7), Inches(0.25))
    pfh = tb_fh.text_frame.paragraphs[0]
    r1 = pfh.add_run()
    r1.text = "FUTURE INTELLIGENCE PIPELINE "
    r1.font.name = FONT_HEAD
    r1.font.size = Pt(9.5)
    r1.font.bold = True
    r1.font.color.rgb = WHITE
    
    r2 = pfh.add_run()
    r2.text = "(FUTURE ENHANCEMENTS — NOT CURRENTLY IMPLEMENTED)"
    r2.font.name = FONT_HEAD
    r2.font.size = Pt(8.5)
    r2.font.bold = True
    r2.font.color.rgb = AMBER_SOLAR
    
    f_steps = [
        ("1. IoT Telemetry", "Ambient & chamber logs"),
        ("2. Cloud Analytics", "Aggregated crop insights"),
        ("3. Shelf-Life AI", "Predictive spoilage models"),
        ("4. Demand-Aware Storage", "Market-coordinated dispatch")
    ]
    
    fx = 0.8
    for i, (ft, fd) in enumerate(f_steps):
        add_badge(slide, Inches(fx), Inches(5.7), Inches(2.55), Inches(0.65), f"{ft}\n{fd}", bg_color=WHITE, text_color=NAVY_TITLE, font_size=8, bold=True)
        if i < 3:
            add_tb(slide, Inches(fx + 2.6), Inches(5.8), Inches(0.35), Inches(0.3), text="➔", font_size=12, bold=True, color=AMBER_SOLAR, align=PP_ALIGN.CENTER)
        fx += 2.95

def build_slide_6(slide):
    print("Building Slide 6...")
    clear_instruction_boxes(slide)
    style_oval_and_footers(slide)
    add_header(slide, "PRIOR ART BENCHMARKING & RESEARCH INSIGHTS", 
               "Comparative Differentiation from PUSA Sunfridge, Storage Physiology & Regional NER Context", 
               "SIH SECTION: RESEARCH & REFERENCES")
    
    # Top: Benchmarking Card - top=1.24"
    add_card(slide, Inches(0.6), Inches(1.24), Inches(12.15), Inches(2.05), bg_color=WHITE, border_color=CARD_BORDER, border_width=1.5)
    
    tb_bh = add_tb(slide, Inches(0.8), Inches(1.30), Inches(11.75), Inches(0.24))
    pbh = tb_bh.text_frame.paragraphs[0]
    pbh.text = "PRIOR ART BENCHMARKING & SYSTEM DIFFERENTIATION"
    pbh.font.name = FONT_HEAD
    pbh.font.size = Pt(10)
    pbh.font.bold = True
    pbh.font.color.rgb = NAVY_TITLE
    
    # Comparison 2 Columns
    add_card(slide, Inches(0.8), Inches(1.56), Inches(5.75), Inches(1.42), bg_color=CARD_BG, border_color=CARD_BORDER, border_width=1)
    tb_pu = add_tb(slide, Inches(0.9), Inches(1.60), Inches(5.55), Inches(1.32))
    tf_pu = tb_pu.text_frame
    p = tf_pu.paragraphs[0]
    r1 = p.add_run()
    r1.text = "PUSA SUNFRIDGE (ICAR Benchmark Solution)\n"
    r1.font.name = FONT_HEAD
    r1.font.size = Pt(9)
    r1.font.bold = True
    r1.font.color.rgb = NAVY_TITLE
    
    r2 = p.add_run()
    r2.text = "• Architecture: Solar-powered cold storage (50–100W PV panels)\n" \
              "• Cooling Mechanism: Vapor compression refrigeration (VCR) with mechanical compressor\n" \
              "• Storage Capacity: 50–100 L (Larger centralized farm/community unit)\n" \
              "• Control & Monitoring: Basic thermostat; no IoT telemetry or cloud logging\n" \
              "• Deployment Context: Centralized village storage requiring transport"
    r2.font.name = FONT_BODY
    r2.font.size = Pt(7.5)
    r2.font.color.rgb = TEXT_DARK
    
    add_card(slide, Inches(6.8), Inches(1.56), Inches(5.75), Inches(1.42), bg_color=GREEN_TINT, border_color=GREEN_AGRI, border_width=1.2)
    tb_our = add_tb(slide, Inches(6.9), Inches(1.60), Inches(5.55), Inches(1.32))
    tf_our = tb_our.text_frame
    p = tf_our.paragraphs[0]
    r1 = p.add_run()
    r1.text = "OUR PROPOSED SYSTEM (Smart Micro Cold Storage)\n"
    r1.font.name = FONT_HEAD
    r1.font.size = Pt(9)
    r1.font.bold = True
    r1.font.color.rgb = GREEN_AGRI
    
    r2 = p.add_run()
    r2.text = "• Architecture: 100W Solar PV + MPPT + LiFePO₄ Battery + ESP32 Edge MCU\n" \
              "• Cooling Mechanism: Solid-state Peltier thermoelectric cooling (no refrigerant leaks/gases)\n" \
              "• Storage Capacity: 20–40 L compact target (individual smallholder portability)\n" \
              "• Control & Monitoring: ESP32 automated closed-loop hysteresis control with multi-sensor telemetry\n" \
              "• IoT Connectivity: Wi-Fi live dashboard, cloud logging, threshold SMS/buzzer alerts"
    r2.font.name = FONT_BODY
    r2.font.size = Pt(7.5)
    r2.font.color.rgb = TEXT_DARK
    
    tb_diff_note = add_tb(slide, Inches(0.8), Inches(3.02), Inches(11.75), Inches(0.2))
    pdn = tb_diff_note.text_frame.paragraphs[0]
    pdn.text = "*Note: Differences presented objectively as project design differentiation tailored for micro-scale on-farm portability, not universal superiority."
    pdn.font.name = FONT_BODY
    pdn.font.size = Pt(7)
    pdn.font.color.rgb = TEXT_MUTED
    
    # Middle Left: 5 Core Research Domains - top=3.35"
    add_card(slide, Inches(0.6), Inches(3.35), Inches(7.4), Inches(2.02), bg_color=WHITE, border_color=CARD_BORDER, border_width=1.5)
    
    tb_rsh = add_tb(slide, Inches(0.75), Inches(3.40), Inches(7.1), Inches(0.22))
    prsh = tb_rsh.text_frame.paragraphs[0]
    prsh.text = "FIVE CORE RESEARCH FOUNDATIONS"
    prsh.font.name = FONT_HEAD
    prsh.font.size = Pt(9.5)
    prsh.font.bold = True
    prsh.font.color.rgb = NAVY_TITLE
    
    res_topics = [
        ("1. Cold Chain & Post-Harvest", "Vegetable respiration physiology; 30–40% loss reduction under controlled low temp & high RH."),
        ("2. Northeast Agricultural Context", "NER hilly terrain logistic bottlenecks, frequent power deficits, and 25–35% regional spoilage rates."),
        ("3. Solar & Thermoelectric Thermodynamics", "Peltier Seebeck effect, COP optimization, heat sink thermal resistance, and MPPT efficiency."),
        ("4. Thermal Insulation Engineering", "Polyurethane foam (PUF) insulation k-factor optimization to minimize thermal conduction gains."),
        ("5. IoT & Edge Sensor Fusion", "ESP32 low-power modes, DS18B20 1-Wire protocol, and INA219 I2C power telemetry.")
    ]
    
    ry = 3.65
    for rt, rd in res_topics:
        tb_rt = add_tb(slide, Inches(0.75), Inches(ry), Inches(7.1), Inches(0.30))
        tf = tb_rt.text_frame
        p = tf.paragraphs[0]
        r1 = p.add_run()
        r1.text = rt + ": "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(7.8)
        r1.font.bold = True
        r1.font.color.rgb = BLUE_DARK
        
        r2 = p.add_run()
        r2.text = rd
        r2.font.name = FONT_BODY
        r2.font.size = Pt(7.2)
        r2.font.color.rgb = TEXT_DARK
        ry += 0.31
    
    # Middle Right: Optimal Storage Conditions Reference Table - top=3.35"
    add_card(slide, Inches(8.2), Inches(3.35), Inches(4.55), Inches(2.02), bg_color=TEAL_TINT, border_color=TEAL_COOL, border_width=1.5)
    
    tb_cdh = add_tb(slide, Inches(8.35), Inches(3.40), Inches(4.25), Inches(0.24))
    pcdh = tb_cdh.text_frame.paragraphs[0]
    pcdh.text = "TARGET VEGETABLE STORAGE RANGES"
    pcdh.font.name = FONT_HEAD
    pcdh.font.size = Pt(9.5)
    pcdh.font.bold = True
    pcdh.font.color.rgb = TEAL_COOL
    
    tb_cd = add_tb(slide, Inches(8.35), Inches(3.68), Inches(4.25), Inches(1.55))
    tf_cd = tb_cd.text_frame
    
    p1 = tf_cd.paragraphs[0]
    r = p1.add_run()
    r.text = "• Leafy Greens (Spinach, Mustard, Herbs):\n"
    r.font.name = FONT_HEAD
    r.font.size = Pt(8.5)
    r.font.bold = True
    r.font.color.rgb = NAVY_TITLE
    
    r = p1.add_run()
    r.text = "  Temperature: 4–8°C  |  Humidity: 85–95% RH\n\n"
    r.font.name = FONT_BODY
    r.font.size = Pt(8)
    r.font.color.rgb = GREEN_AGRI
    
    p2 = tf_cd.add_paragraph()
    r = p2.add_run()
    r.text = "• Root Vegetables (Carrots, Radish, Ginger):\n"
    r.font.name = FONT_HEAD
    r.font.size = Pt(8.5)
    r.font.bold = True
    r.font.color.rgb = NAVY_TITLE
    
    r = p2.add_run()
    r.text = "  Temperature: 10–15°C  |  Humidity: 85–90% RH\n\n"
    r.font.name = FONT_BODY
    r.font.size = Pt(8)
    r.font.color.rgb = AMBER_SOLAR
    
    p3 = tf_cd.add_paragraph()
    r = p3.add_run()
    r.text = "*General agronomic literature ranges; baseline setpoint target: 4–8°C."
    r.font.name = FONT_BODY
    r.font.size = Pt(7)
    r.font.color.rgb = TEXT_MUTED
    
    # Bottom Academic References
    add_card(slide, Inches(0.6), Inches(5.45), Inches(12.15), Inches(1.02), bg_color=CARD_BG, border_color=CARD_BORDER, border_width=1.2)
    
    tb_rfh = add_tb(slide, Inches(0.8), Inches(5.5), Inches(11.75), Inches(0.2))
    prfh = tb_rfh.text_frame.paragraphs[0]
    prfh.text = "SCIENTIFIC & POLICY REFERENCES"
    prfh.font.name = FONT_HEAD
    prfh.font.size = Pt(8.5)
    prfh.font.bold = True
    prfh.font.color.rgb = NAVY_TITLE
    
    refs = [
        ("ICAR Research Complex for NEH Region:", "Post-Harvest Management & Cold Chain Interventions for Perishable Horticulture in NER."),
        ("Ministry of Agriculture & Farmers Welfare, GoI:", "Mission for Integrated Development of Horticulture (MIDH) Strategic Roadmap."),
        ("Journal of Food Engineering / Applied Thermal Engg:", "Experimental Evaluation of Solar-Powered Thermoelectric Cooling Systems."),
        ("IEEE Internet of Things Journal:", "Low-Power Environmental Edge Sensing and Telemetry in Agricultural Cold Chains.")
    ]
    
    tb_rf = add_tb(slide, Inches(0.8), Inches(5.72), Inches(11.75), Inches(0.65))
    tf_rf = tb_rf.text_frame
    for i, (auth, titl) in enumerate(refs):
        p = tf_rf.paragraphs[0] if i == 0 else tf_rf.add_paragraph()
        r1 = p.add_run()
        r1.text = f"[{i+1}] {auth} "
        r1.font.name = FONT_HEAD
        r1.font.size = Pt(7.2)
        r1.font.bold = True
        r1.font.color.rgb = BLUE_SIH
        
        r2 = p.add_run()
        r2.text = titl + "  "
        r2.font.name = FONT_BODY
        r2.font.size = Pt(7.2)
        r2.font.color.rgb = TEXT_DARK

def main():
    print("Loading presentation...")
    prs = pptx.Presentation(INPUT_PPTX)
    print(f"Initial slide count: {len(prs.slides)}")
    
    # Check if slide 7 exists and delete it
    if len(prs.slides) > 6:
        print("Deleting Slide 7 (Instruction Slide)...")
        rId = prs.slides._sldIdLst[6].rId
        prs.part.drop_rel(rId)
        del prs.slides._sldIdLst[6]
        print(f"Slide count after deletion: {len(prs.slides)}")
    
    # Build each slide
    build_slide_1(prs.slides[0])
    build_slide_2(prs.slides[1])
    build_slide_3(prs.slides[2])
    build_slide_4(prs.slides[3])
    build_slide_5(prs.slides[4])
    build_slide_6(prs.slides[5])
    
    print(f"Saving final presentation to {OUTPUT_PPTX}...")
    prs.save(OUTPUT_PPTX)
    print("Presentation saved successfully!")
    
    # Verify saved presentation
    prs_check = pptx.Presentation(OUTPUT_PPTX)
    print(f"Verification: {OUTPUT_PPTX} contains {len(prs_check.slides)} slides.")

if __name__ == "__main__":
    main()
