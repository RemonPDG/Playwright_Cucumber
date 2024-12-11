const { Given, When, Then, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const XLSX = require('xlsx');

function readExcelFile(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  return data;
}

Given('Saya login ke B2B dan Hapus Data Tag', async () => {
  const data = readExcelFile('C:\\Users\\kurni\\playwright-cucumber\\Excel\\B2B.xlsx');
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ui-qc-b2b.bhakti.co.id/auth/login/phoenix');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill(data[1][0]);
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('#password').fill(data[1][0]);
  await page.locator('#password').press('Enter');
});

Then('Pesan Berhasil dihapus', async () => {
  await browser.close();
  console.log('Tag berhasil dihapus test report');
});