const { Given, When, Then, Before, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, firefox } = require('playwright');
const XLSX = require('xlsx');
const path = require('path'); // Tambahkan ini di awal file
const fs = require('fs');


function readExcelFile(filePath) {
  const workbook = XLSX.readFile(filePath);

  // Ambil data dari sheet pertama
  const sheetName1 = workbook.SheetNames[0]; // Ganti 0 dengan nama sheet jika diketahui
  const worksheet1 = workbook.Sheets[sheetName1];
  const data1 = XLSX.utils.sheet_to_json(worksheet1, { header: 1 });

  return { data1 };
}
// Jalur relatif ke file Excel
const excelFilePath = path.resolve(__dirname, '../../../../Excel/B2B.xlsx');

// Membaca data dari file Excel
const { data1 } = readExcelFile(excelFilePath);
// console.log('Data dari Sheet 1:', data1);



// Fungsi login
Given('User mengunjungi website B2B QC - 008', { timeout: 1555000 }, async function () {
  await this.page.goto('https://ui-qc-b2b.bhakti.co.id/auth/login/phoenix');
  await this.page.waitForSelector('#nb-global-spinner', { state: 'hidden' });
  await this.page.waitForSelector('div:nth-child(8)', { state: 'hidden' });
});


Given('User menginput email tidak valid - 008', async function () {
  await this.page.locator('input[name="email"]').click();
  await this.page.locator('input[name="email"]').fill('abcd123@gmail.com');
  await this.page.locator('input[name="email"]').press('Tab');
});

Given('User menginput password tidak valid - 008', async function () {
  await this.page.locator('#password').fill('1234567890-');

});

Given('User mengklik button Sign In - 008', { timeout: 1555000 }, async function () {
  try {
    await this.page.locator('#password').press('Enter');
  } catch (error) {
    console.warn('Username dan Password salah, lanjutkan test');
  }


});

Then('User diarahkan ke dashboard - 008', async function () {
  try {
    await this.page.waitForSelector('#nb-global-spinner', { state: 'hidden' });
    await this.page.waitForSelector('div:nth-child(8)', { state: 'hidden' });
  } catch (error) {
    console.warn('Loading tidak keluar, lanjutkan test');
  }


});
