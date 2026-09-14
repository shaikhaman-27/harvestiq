import os
import zipfile
import sys

for fn in ["SIH_26005_Smart_Solar_Cold_Storage_FINAL.pptx", "SIH_26005_Smart_Solar_Cold_Storage_FINAL.pdf"]:
    if os.path.exists(fn):
        sz = os.path.getsize(fn)
        print(f"File {fn}: {sz:,} bytes ({sz/1024:.1f} KB)")
        if fn.endswith(".pptx"):
            with zipfile.ZipFile(fn, "r") as z:
                res = z.testzip()
                print("  Zip test:", "OK" if res is None else f"Corrupted: {res}")
                slides = [n for n in z.namelist() if n.startswith("ppt/slides/slide") and n.endswith(".xml")]
                print(f"  Slide XML count: {len(slides)}")
                for s in sorted(slides):
                    print("   ", s)
    else:
        print(f"File {fn}: NOT FOUND")
