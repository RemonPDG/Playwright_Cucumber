const { Before, After, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs-extra');
const path = require('path');

setDefaultTimeout(60000);

Before(async function ({ pickle }) {
  // Luncurkan browser dengan context yang merekam video
  this.browser = await chromium.launch({ headless: false });
  const videoDir = path.resolve('reports/videos/');

  // Pastikan direktori video ada
  await fs.ensureDir(videoDir);

  // Tentukan nama file video berdasarkan nama pickle
  const videoFileName = `${pickle.name.replace(/\s+/g, '_')}.webm`;
  this.videoPath = path.join(videoDir, videoFileName);

  // Buat browser context dengan opsi rekaman video
  this.context = await this.browser.newContext({
    recordVideo: { dir: videoDir },
    size: { width: 1280, height: 720 },
  });

  this.page = await this.context.newPage();
});

AfterStep(async function ({ pickle }) {
  // Tentukan path untuk screenshot
  const screenshotPath = `reports/screenshots/${pickle.name.replace(/\s+/g, '_')}.png`;

  // Ambil screenshot dan simpan
  const image = await this.page.screenshot({ path: screenshotPath, type: 'png' });

  // Lampirkan path gambar langsung ke laporan, bukan Base64
  await this.attach(image, "image/png");
});




After(async function ({ pickle }) {
  // Tutup halaman untuk memastikan video selesai direkam
  await this.page.close();

  // Ambil path video dari halaman
  const video = this.page.video();
  if (video) {
    const actualVideoPath = await video.path();

    // Pindahkan video ke nama file spesifik berdasarkan pickle
    await fs.move(actualVideoPath, this.videoPath, { overwrite: true });

    // Konversi video menjadi Base64
    const videoData = fs.readFileSync(this.videoPath);

    // Lampirkan data Base64 ke laporan JSON
    await this.attach(videoData, 'video/webm');
  } else {
    console.error(`Video recording not found for ${pickle.name}!`);
  }

  // Tutup browser
  await this.browser.close();
});

