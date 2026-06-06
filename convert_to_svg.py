import struct
import base64

def png_to_svg(png_path, svg_path):
    with open(png_path, 'rb') as f:
        # Check PNG signature
        if f.read(8) != b'\x89PNG\r\n\x1a\n':
            print("Not a valid PNG")
            return
        
        # Read IHDR chunk
        chunk_len = struct.unpack('>I', f.read(4))[0]
        chunk_type = f.read(4)
        if chunk_type != b'IHDR':
            print("IHDR chunk not found")
            return
            
        w, h = struct.unpack('>II', f.read(8))
        f.seek(0)
        b64 = base64.b64encode(f.read()).decode('utf-8')
        
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">\n'
    svg += f'  <image href="data:image/png;base64,{b64}" width="{w}" height="{h}"/>\n'
    svg += '</svg>'
    
    with open(svg_path, 'w', encoding='utf-8') as f:
        f.write(svg)

png_to_svg('public/logo.png', 'public/kumar-hospitals.svg')
print("Conversion done.")
