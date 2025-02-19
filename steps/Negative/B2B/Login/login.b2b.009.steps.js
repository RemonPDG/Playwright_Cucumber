const { Given, When, Then, Before, setDefaultTimeout } = require('@cucumber/cucumber');

// Fungsi login
Given('User mengunjungi website Dashboard B2B QC - 009', { timeout: 1555000 }, async function () {
  await this.page.goto('https://ui-qc-b2b.bhakti.co.id/dashboard');
  try {
    await expect(this.page).toHaveURL('https://ui-qc-b2b.bhakti.co.id/auth/login/phoenix');
    await this.page.waitForSelector('#splash-screen', { state: 'hidden' });
  } catch (error) {
    console.warn('Tidak diarahkan ke dashboard, lanjutkan test');
  }
});

Then('User diarahkan ke dashboard - 009', async function () {
  try {
    await this.page.waitForSelector('#nb-global-spinner', { state: 'hidden' });
    await this.page.waitForSelector('div:nth-child(8)', { state: 'hidden' });
  } catch (error) {
    console.warn('Loading tidak keluar, lanjutkan test');
  }


});
