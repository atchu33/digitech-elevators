import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

async function generateFavicons() {
  const source = path.join(publicDir, 'favicon-512x512.png');
  
  if (!fs.existsSync(source)) {
    console.error('Source icon not found:', source);
    return;
  }

  const sizes = [16, 32, 48, 96, 144, 192];
  for (const s of sizes) {
    const outFile = path.join(publicDir, `favicon-${s}x${s}.png`);
    await sharp(source)
      .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(outFile);
    console.log(`Generated favicon-${s}x${s}.png`);
  }

  // Also write 48x48 as favicon.png (some search engines default to /favicon.png)
  await sharp(source)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Generated favicon.png (48x48)');

  // Also update apple-touch-icon.png (180x180)
  await sharp(source)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png (180x180)');

  // Generate favicon.ico (using 48x48)
  const ico48Buffer = await sharp(source)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  
  // Write favicon.ico
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico48Buffer);
  console.log('Generated favicon.ico (48x48)');
}

generateFavicons().catch(console.error);
