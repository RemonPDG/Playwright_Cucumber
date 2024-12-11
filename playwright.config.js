const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Lokasi folder untuk file tes
  timeout: 3330000, // Timeout default untuk setiap tes (dalam milidetik)
  expect: {
    timeout: 5555000, // Timeout untuk assertion
  },
  reporter: 'html', // Laporan hasil tes dalam format HTML
  use: {
    headless: true, // Jalankan browser dalam mode headless
    viewport: { width: 1280, height: 720 }, // Ukuran layar browser
    ignoreHTTPSErrors: true, // Abaikan error HTTPS
    screenshot: 'on', // Ambil screenshot otomatis saat tes gagal
    video: 'retain-on-failure', // Rekam video saat tes gagal
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});