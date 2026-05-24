const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'images');

const fileMap = {
  'Fresh Fruit_1_11zon.jpg': 'kategori_fresh_fruit.webp',
  'Hampers_2_11zon.jpg': 'kategori_hampers.webp',
  'Juice Nanas_3_11zon.jpg': 'kategori_juice.webp',
  'pantry nanas_4_11zon.jpg': 'kategori_pantry.webp',
  'Snack_5_11zon.jpg': 'kategori_snacks.webp',
  'Supplements_6_11zon.jpg': 'kategori_supplements.webp'
};

async function convertAndRename() {
  console.log('Starting conversion and renaming of category images...');
  for (const [src, dest] of Object.entries(fileMap)) {
    const srcPath = path.join(dir, src);
    const destPath = path.join(dir, dest);

    if (fs.existsSync(srcPath)) {
      try {
        console.log(`Converting ${src} -> ${dest}...`);
        await sharp(srcPath)
          .webp({ quality: 85 })
          .toFile(destPath);
        
        // Delete original JPG file
        fs.unlinkSync(srcPath);
        console.log(`Successfully converted and deleted: ${src}`);
      } catch (err) {
        console.error(`Error converting ${src}:`, err);
      }
    } else {
      console.warn(`Source file not found: ${src}`);
    }
  }
  console.log('Conversion process complete!');
}

convertAndRename();
