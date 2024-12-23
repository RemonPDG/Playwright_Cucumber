const { Before, After, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(60000);

Before(async function () {
  // Luncurkan browser dengan context yang merekam video
  this.browser = await chromium.launch({ headless: false }); // Gunakan Chromium
  this.context = await this.browser.newContext({
    recordVideo: { dir: 'reports/videos/' }, // Direktori untuk menyimpan video
  });
  this.page = await this.context.newPage(); // Buat halaman baru
});

AfterStep(async function ({ pickle }) {
  // Tentukan path untuk screenshot
  const screenshotPath = `reports/screenshots/${pickle.name.replace(/\s+/g, '_')}.png`;

  // Ambil screenshot dan simpan
  const image = await this.page.screenshot({ path: screenshotPath, type: 'png' });

  // Tentukan path relatif dari proyek (pastikan path ini benar)
  // const relativePath = path.relative(process.cwd(), screenshotPath);

  // Lampirkan path gambar langsung ke laporan, bukan Base64
  await this.attach(image, "image/png");
});


// After(async function () {
//   try {
//     // Tutup halaman untuk menyelesaikan video
//     await this.page.close();

//     // Ambil path video
//     const videoPath = await this.page.video().path();
//     console.log('Video saved at:', videoPath);

//     // Tambahkan ke laporan JSON
//     await this.attach(videoPath, 'video/webm');
//   } catch (error) {
//     console.error('Error capturing video:', error.message);
//   } finally {
//     // Tutup browser
//     await this.browser.close();
//   }
// });


After(async function () {
  // Tutup halaman untuk memastikan video selesai direkam
  await this.page.close();

  // Ambil path video dari halaman
  const video = await this.page.video();
  if (video) {
    const videoPath = await video.path();

    // Ubah path menjadi relatif
    const relativeVideoPath = path.relative(process.cwd(), videoPath);

    // Lampirkan path langsung ke laporan JSON
    await this.attach(`file://${relativeVideoPath}`, 'video/webm');
  } else {
    console.error("Video recording not found for this page!");
  }

  // Tutup browser
  await this.browser.close();
});

