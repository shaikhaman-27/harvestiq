import win32com.client, os

ppt = win32com.client.Dispatch("PowerPoint.Application")
pres = ppt.Presentations.Open(os.path.abspath("test_6slides.pptx"), WithWindow=False)
pres.SaveAs(os.path.abspath("test_6slides.pdf"), 32) # 32 = ppSaveAsPDF
print("PDF exported successfully, slides count:", pres.Slides.Count)
pres.Close()
ppt.Quit()
