import win32com.client, os

ppt = win32com.client.Dispatch("PowerPoint.Application")
in_path = os.path.abspath("SIH2026-IDEA-Presentation-Format.pptx")
pres = ppt.Presentations.Open(in_path, WithWindow=False)
out_dir = os.path.abspath("test_slides_export")
os.makedirs(out_dir, exist_ok=True)
for i, slide in enumerate(pres.Slides):
    slide.Export(os.path.join(out_dir, f"slide_{i+1}.png"), "PNG", 1920, 1080)
pres.Close()
ppt.Quit()
print("Exported slides successfully!")
