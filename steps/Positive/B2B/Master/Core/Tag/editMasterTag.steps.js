const { Given, When, Then, And} = require('@cucumber/cucumber');
// const { expect } = require('@playwright/test');
const { chromium } = require('playwright');
const XLSX = require('xlsx');
const path = require('path'); // Tambahkan ini di awal file
const fs = require('fs');

function readExcelFile(filePath) {
  const workbook = XLSX.readFile(filePath);
  
  // Ambil data dari sheet pertama
  const sheetName1 = workbook.SheetNames[0]; // Ganti 0 dengan nama sheet jika diketahui
  const worksheet1 = workbook.Sheets[sheetName1];
  const data1 = XLSX.utils.sheet_to_json(worksheet1, { header: 1 });

  // Ambil data dari sheet kedua
  const sheetName2 = workbook.SheetNames[2]; // Ganti 1 dengan nama sheet jika diketahui
  const worksheet2 = workbook.Sheets[sheetName2];
  const data2 = XLSX.utils.sheet_to_json(worksheet2, { header: 1 });

  return { data1, lastdata: data2[data2.length - 1] };
}
// Jalur relatif ke file Excel
const excelFilePath = path.resolve(__dirname, '../../../../../../Excel/B2B.xlsx');

// // Membaca data dari file Excel
const { data1, lastdata } = readExcelFile(excelFilePath);
// const lastRowData = readExcelFile(excelFilePath, sheetName2);
// const searchData = lastRowData[0];

// Baca data baris terakhir
// console.log('Data dari Sheet 1:', data1);
// console.log('Data dari Sheet 2:', lastdata);

// Fungsi login
Given('Login B2B berhasil',{ timeout: 1555000 }, async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ui-qc-b2b.bhakti.co.id/auth/login/phoenix');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill(data1[1][0]);
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('#password').fill(data1[1][1].toString());
  await page.locator('#password').press('Enter');
  // await page.waitForSelector('#nb-global-spinner', { state: 'hidden' });
  await page.waitForSelector('.loading-indicator', { state: 'hidden' });
  // const loginSuccess = this.page.locator('text=Dashboard'); // Pastikan elemen ini ada setelah login
  // await expect(loginSuccess).toBeVisible();
});

// Navigasi ke Master > Core > Tag
Given('Master', async function () {
  await page.getByLabel('Toggle Master').click();
});

Given('Core', async function () {
  await page.getByLabel('Toggle Core').click();
});

Given('Tag',{ timeout: 1555000 }, async function () {
  await page.getByLabel('Toggle Tag').click();
  await page.waitForSelector('.loading-indicator', { state: 'hidden' });
});

// Memastikan tampilan list tag
When('Saya melihat tampilan semua list Tag', async function () {
  // await page.getByRole('button', { name: 'Create New' }).waitForSelector(selector, { state: 'visible', timeout: 5000 });
});

When('Cari data yang diinput sebelumnya di excel',{ timeout: 1555000 }, async function () {
  await page.getByPlaceholder('Search Data').click();
  await page.getByPlaceholder('Search Data').fill(lastdata.toString());
  await page.getByPlaceholder('Search Data').press('Enter');
  await page.waitForSelector('.loading-indicator', { state: 'hidden' });
});

// Klik tombol Create New
When('Klik datanya',{ timeout: 1555000 }, async function () {
  await page.getByRole('cell', { name: lastdata.toString() }).click();
  //   await page.waitForSelector('.loading-indicator', { state: 'hidden' });
});

When('Klik Edit',{ timeout: 1555000 }, async function () {
  await page.getByRole('button', { name: 'Edit', exact: true }).click();
  await page.waitForSelector('.loading-indicator', { state: 'hidden' });
});

// Isi data tag baru
When('Isi Data yang mau dirubah',{ timeout: 1555000 }, async function () {
  await page.locator('div:nth-child(2) > div > .col-lg-9 > .form-control').first().fill('#ffffff');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('ZZZZZZZZZZZZZ.');
  
});

// Klik Save dan verifikasi hasil
Then('Klik Save, dan hasil berhasil di edit',{ timeout: 1555000 }, async function () {
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForSelector('.loading-indicator', { state: 'hidden' });

  // await page.locator('div').filter({ hasText: /^Tag Color$/ }).getByRole('textbox').click({
  //   button: 'right'
  // });
  // await page.locator('textarea').click({
  //   button: 'right'
  // });
  // await page.locator('div').filter({ hasText: /^Tag Name$/ }).getByRole('textbox').click({
  //   button: 'right'
  // });

  await page.locator('div').filter({ hasText: new RegExp(`^${lastdata}$`, 'i') });
  // await page.locator('div').filter({ hasText: /^Tag Name$/ }).getByRole('textbox').click({
  //   button: 'right'
  // });
  // await page.locator(`text=/.*${randomString}.*/i`).waitFor();
  await browser.close();
});