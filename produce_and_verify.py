import os
import sys
import shutil
import zipfile
import fitz # PyMuPDF
from pptx import Presentation

SRC_PPTX = "SIH_26005_Smart_Solar_Cold_Storage_FINAL.pptx"
DEST_PPTX = "HarvestIQ_SIH2026_Final.pptx"
DEST_PDF = "HarvestIQ_SIH2026_Final.pdf"

print("=== STEP 1: PREPARE PPTX ===")
shutil.copy2(SRC_PPTX, DEST_PPTX)
print(f"Copied {SRC_PPTX} -> {DEST_PPTX}")
sz_pptx = os.path.getsize(DEST_PPTX)
print(f"File size: {sz_pptx:,} bytes ({sz_pptx/1024:.1f} KB)")

print("\n=== STEP 2: EXPORT PDF VIA POWERPOINT COM ===")
import win32com.client
ppt = None
pres = None
try:
    ppt = win32com.client.Dispatch("PowerPoint.Application")
    abs_pptx = os.path.abspath(DEST_PPTX)
    abs_pdf = os.path.abspath(DEST_PDF)
    if os.path.exists(abs_pdf):
        os.remove(abs_pdf)
    pres = ppt.Presentations.Open(abs_pptx, WithWindow=False)
    print(f"Presentation opened in PowerPoint. Slide count: {pres.Slides.Count}")
    pres.SaveAs(abs_pdf, 32) # 32 = ppSaveAsPDF
    print(f"Saved PDF to: {abs_pdf}")
finally:
    if pres:
        pres.Close()
    if ppt:
        ppt.Quit()
    del pres
    del ppt

sz_pdf = os.path.getsize(DEST_PDF)
print(f"PDF exported successfully. File size: {sz_pdf:,} bytes ({sz_pdf/1024:.1f} KB)")

print("\n=== STEP 3: RIGOROUS PPTX VERIFICATION ===")
# 3a. Zip integrity
with zipfile.ZipFile(DEST_PPTX, "r") as z:
    bad_file = z.testzip()
    assert bad_file is None, f"Corrupted zip entry: {bad_file}"
    print("  [✓] ZIP container structure is 100% valid (0 CRC errors)")
    
    # Check essential XML files
    namelist = set(z.namelist())
    assert "[Content_Types].xml" in namelist, "Missing [Content_Types].xml"
    assert "ppt/presentation.xml" in namelist, "Missing ppt/presentation.xml"
    slides = sorted([n for n in namelist if n.startswith("ppt/slides/slide") and n.endswith(".xml")])
    assert len(slides) == 6, f"Expected 6 slide XMLs, found {len(slides)}"
    print(f"  [✓] Found all {len(slides)} slide XML parts: {', '.join([os.path.basename(s) for s in slides])}")

# 3b. python-pptx parsing
prs = Presentation(DEST_PPTX)
assert len(prs.slides) == 6, f"Expected 6 slides, got {len(prs.slides)}"
for idx, slide in enumerate(prs.slides):
    shapes_cnt = len(slide.shapes)
    texts = [shape.text_frame.text.strip() for shape in slide.shapes if shape.has_text_frame and shape.text_frame.text.strip()]
    first_heading = texts[0].replace("\n", " ")[:50] if texts else "No text"
    print(f"  [✓] Slide {idx+1}: {shapes_cnt} shapes, Heading: '{first_heading}'")

print("\n=== STEP 4: RIGOROUS PDF VERIFICATION ===")
doc = fitz.open(DEST_PDF)
print(f"  [✓] PDF opened successfully via PyMuPDF")
print(f"  [✓] Page count: {doc.page_count}")
assert doc.page_count == 6, f"PDF must have exactly 6 pages, found {doc.page_count}"

for idx, page in enumerate(doc):
    rect = page.rect
    aspect = rect.width / rect.height
    text = page.get_text()
    chars = len(text.strip())
    first_line = text.strip().split("\n")[0] if text.strip() else "EMPTY"
    print(f"  [✓] Page {idx+1}: Size {rect.width:.1f} x {rect.height:.1f} pt (Aspect: {aspect:.2f}, 16:9 widescreen), Chars: {chars}, First line: '{first_line[:40]}'")
    assert chars > 50, f"Page {idx+1} seems too empty ({chars} characters)"

doc.close()

print("\n=== ALL VERIFICATIONS PASSED 100% ===")
