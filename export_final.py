import win32com.client, os

ppt = win32com.client.Dispatch("PowerPoint.Application")
pptx_path = os.path.abspath("SIH_26005_Smart_Solar_Cold_Storage_FINAL.pptx")
pdf_path = os.path.abspath("SIH_26005_Smart_Solar_Cold_Storage_FINAL.pdf")
out_dir = os.path.abspath("output_slides")
os.makedirs(out_dir, exist_ok=True)

pres = ppt.Presentations.Open(pptx_path, WithWindow=False)
print("Opened presentation, slide count:", pres.Slides.Count)

# Export PDF
pres.SaveAs(pdf_path, 32) # 32 = ppSaveAsPDF
print(f"Exported PDF to: {pdf_path}")

# Export slide PNGs
for i, slide in enumerate(pres.Slides):
    png_path = os.path.join(out_dir, f"slide_{i+1}.png")
    slide.Export(png_path, "PNG", 1920, 1080)
    print(f"Exported slide {i+1} to {png_path}")

pres.Close()
ppt.Quit()
print("All exports completed successfully!")
