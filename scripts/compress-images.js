/**
 * Sri Varahi Agro Foods — Product Image Auto-Compressor
 * ======================================================
 * HOW TO USE:
 *   1. Drop your raw photos into the correct product folder under public/products/
 *      Name them: image-1.jpg, image-2.jpg, image-3.jpg
 *   2. Run this script:
 *      node scripts/compress-images.js
 *   3. Done! Compressed WebP files are saved automatically in the same folder.
 *
 * OUTPUT SPEC:
 *   - Format:     WebP (best quality, smallest size)
 *   - Width:      800px (height auto-scales)
 *   - Quality:    82% (looks perfect, very small file)
 *   - Target size: ~100-150 KB per image (vs 5-8 MB raw)
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// ─── Configuration ────────────────────────────────────────────────────────────
const PRODUCTS_DIR = path.join(__dirname, '..', 'public', 'products');
const INPUT_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif', '.heic', '.webp'];
const OUTPUT_WIDTH = 800;        // px — perfect for product cards
const OUTPUT_QUALITY = 82;       // % — great quality, small size
const OUTPUT_FORMAT = 'webp';

// ─── Stats ────────────────────────────────────────────────────────────────────
let totalProcessed = 0;
let totalSkipped = 0;
let totalSavedMB = 0;
const errors = [];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function getAllImageFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...getAllImageFiles(fullPath));
    } else {
      const ext = path.extname(item.name).toLowerCase();
      // Only pick up raw input images (not already-compressed webp output unless re-processing)
      if (INPUT_EXTENSIONS.includes(ext) && !item.name.startsWith('_compressed_')) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

// ─── Main Compressor ──────────────────────────────────────────────────────────
async function compressImage(inputPath) {
  const dir = path.dirname(inputPath);
  const baseName = path.basename(inputPath, path.extname(inputPath));
  const outputPath = path.join(dir, `${baseName}.webp`);

  // Skip if already a webp AND same name (re-run protection)
  if (path.extname(inputPath).toLowerCase() === '.webp' && fs.existsSync(outputPath)) {
    totalSkipped++;
    return;
  }

  try {
    const inputStat = fs.statSync(inputPath);
    const inputSize = inputStat.size;

    await sharp(inputPath)
      .resize({ width: OUTPUT_WIDTH, withoutEnlargement: true })
      .webp({ quality: OUTPUT_QUALITY, effort: 6 })
      .toFile(outputPath);

    const outputStat = fs.statSync(outputPath);
    const outputSize = outputStat.size;
    const saved = inputSize - outputSize;
    const pctSaved = ((saved / inputSize) * 100).toFixed(0);

    totalSavedMB += saved / (1024 * 1024);
    totalProcessed++;

    const relPath = path.relative(PRODUCTS_DIR, outputPath);
    console.log(`  ✅ ${relPath}`);
    console.log(`     ${formatBytes(inputSize)} → ${formatBytes(outputSize)} (saved ${pctSaved}%)`);

    // If input was not already webp, rename original with _original_ prefix so it's kept as backup
    if (path.extname(inputPath).toLowerCase() !== '.webp') {
      const backupPath = path.join(dir, `_original_${path.basename(inputPath)}`);
      fs.renameSync(inputPath, backupPath);
      console.log(`     📦 Original backed up as: _original_${path.basename(inputPath)}`);
    }

  } catch (err) {
    errors.push({ file: inputPath, error: err.message });
    console.log(`  ❌ FAILED: ${path.basename(inputPath)} — ${err.message}`);
  }
}

// ─── Run ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n🌿 Sri Varahi Agro Foods — Image Compressor');
  console.log('━'.repeat(50));
  console.log(`📁 Scanning: ${PRODUCTS_DIR}`);
  console.log(`⚙️  Settings: ${OUTPUT_WIDTH}px wide, ${OUTPUT_QUALITY}% quality, WebP format`);
  console.log('━'.repeat(50) + '\n');

  const allImages = getAllImageFiles(PRODUCTS_DIR);

  if (allImages.length === 0) {
    console.log('📭 No images found to compress.');
    console.log('\n👉 How to add images:');
    console.log('   1. Go to public/products/<category>/<product-name>/');
    console.log('   2. Copy your photos there named: image-1.jpg, image-2.jpg, image-3.jpg');
    console.log('   3. Run: node scripts/compress-images.js\n');
    return;
  }

  console.log(`📸 Found ${allImages.length} image(s) to compress:\n`);

  // Group by folder for cleaner output
  const byFolder = {};
  for (const imgPath of allImages) {
    const folder = path.relative(PRODUCTS_DIR, path.dirname(imgPath));
    if (!byFolder[folder]) byFolder[folder] = [];
    byFolder[folder].push(imgPath);
  }

  for (const [folder, images] of Object.entries(byFolder)) {
    console.log(`\n📂 ${folder}/`);
    for (const imgPath of images) {
      await compressImage(imgPath);
    }
  }

  // ─── Summary ──────────────────────────────────────────────────────────────
  console.log('\n' + '━'.repeat(50));
  console.log('📊 COMPRESSION SUMMARY');
  console.log('━'.repeat(50));
  console.log(`✅ Compressed:   ${totalProcessed} image(s)`);
  console.log(`⏭️  Skipped:      ${totalSkipped} image(s)`);
  console.log(`💾 Space saved:  ${totalSavedMB.toFixed(1)} MB`);

  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`   • ${e.file}: ${e.error}`));
  }

  console.log('\n🎉 Done! WebP images are ready in public/products/');
  console.log('💡 Tip: Update agroData.js image paths to use the new local WebP files.\n');
}

main().catch(console.error);
