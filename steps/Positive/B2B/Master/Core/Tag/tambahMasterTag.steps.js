const { Given, When, Then} = require('@cucumber/cucumber');
// const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const XLSX = require('xlsx');
const path = require('path'); // Tambahkan ini di awal file

function readExcelFile(filePath) {
  const workbook = XLSX.readFile(filePath);
  
  // Ambil data dari sheet pertama
  const sheetName1 = workbook.SheetNames[0]; // Ganti 0 dengan nama sheet jika diketahui
  const worksheet1 = workbook.Sheets[sheetName1];
  const data1 = XLSX.utils.sheet_to_json(worksheet1, { header: 1 });

  // Ambil data dari sheet kedua
  const sheetName2 = workbook.SheetNames[1]; // Ganti 1 dengan nama sheet jika diketahui
  const worksheet2 = workbook.Sheets[sheetName2];
  const data2 = XLSX.utils.sheet_to_json(worksheet2, { header: 1 });

  return { data1, data2 };
}
// Jalur relatif ke file Excel
const excelFilePath = path.resolve(__dirname, '../../../../../../Excel/B2B.xlsx');

// Membaca data dari file Excel
const { data1, data2 } = readExcelFile(excelFilePath);
// console.log('Data dari Sheet 1:', data1);
// console.log('Data dari Sheet 2:', data2);

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const randomString = generateRandomString(10); // Panjang 10 karakter
const uppercaseInput = randomString.toUpperCase();
// console.log(randomString);

// Fungsi login
Given('Login berhasil',{ timeout: 1555000 }, async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ui-qc-b2b.bhakti.co.id/auth/login/phoenix');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill(data1[1][0]);
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('#password').fill(data1[1][1].toString());
  await page.locator('#password').press('Enter');
  await page.waitForSelector('#nb-global-spinner', { state: 'hidden' });
  await page.waitForSelector('div:nth-child(8)', { state: 'hidden' });
  // const loginSuccess = this.page.locator('text=Dashboard'); // Pastikan elemen ini ada setelah login
  // await expect(loginSuccess).toBeVisible();
});

// Navigasi ke Master > Core > Tag
Given('Pergi ke Master', async function () {
  await page.getByLabel('Toggle Master').click();
});

Given('Pergi ke Core', async function () {
  await page.getByLabel('Toggle Core').click();
});

Given('Pergi ke Tag',{ timeout: 1555000 }, async function () {
  await page.getByLabel('Toggle Tag').click();
  await page.waitForSelector('div:nth-child(8)', { state: 'hidden' });
});

// Memastikan tampilan list tag
When('Saya melihat tampilan list tag', async function () {
  // await page.getByRole('button', { name: 'Create New' }).waitForSelector(selector, { state: 'visible', timeout: 5000 });
});

// Klik tombol Create New
When('Klik Create New',{ timeout: 1555000 }, async function () {
  // Tunggu hingga elemen yang diinginkan menghilang
  await page.waitForSelector('div:nth-child(8)', { state: 'hidden' });
  // Klik tombol "Create New"
  await page.getByRole('button', { name: 'Create New' }).click();
});

// Isi data tag baru
When('Isi datanya',{ timeout: 1555000 }, async function () {
  await page.getByText('Pilih Tag Category').click();
  await page.getByText('PRODUCT', { exact: true }).click();
  await page.getByText('CAMPAIGN_GROUP', { exact: true }).click();
  await page.getByText('DIVISION_GROUP').click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill(randomString);
  await page.getByRole('textbox').nth(1).click();
  await page.locator('div:nth-child(2) > div > .col-lg-9 > .form-control').first().fill(data2[1][1]);
  await page.locator('textarea').click();
  await page.locator('textarea').fill(data2[1][2]);
});
console.log(randomString);

// Klik Save dan verifikasi hasil
Then('Klik Save, dan hasil berhasil',{ timeout: 1555000 }, async function () {
  await page.getByRole('button', { name: 'Save' }).click();
  // await page.waitForSelector('div:nth-child(8)', { state: 'hidden' });

  await page.locator('div').filter({ hasText: new RegExp(`^${randomString}$`, 'i') });
  // await page.locator('div').filter({ hasText: /^Tag Name$/ }).getByRole('textbox').click({
  //   button: 'right'
  // });
  // await page.locator(`text=/.*${randomString}.*/i`).waitFor();
  await browser.close();
});