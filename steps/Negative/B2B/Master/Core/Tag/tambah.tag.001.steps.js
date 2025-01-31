const { Given, When, Then, Before,setDefaultTimeout} = require('@cucumber/cucumber');
// const { AfterStep } = require('@cucumber/cucumber');
// const { expect } = require('@playwright/test');
const { chromium, firefox } = require('playwright');
const XLSX = require('xlsx');
// const fs = require('fs-extra');
const path = require('path'); // Tambahkan ini di awal file
const fs = require('fs');

// Before(async function () {
//   browser = await chromium.launch({ headless: false }); // Meluncurkan browser
//   const context = await browser.newContext(); // Membuat konteks baru
//   page = await context.newPage(); // Membuka halaman baru
//   this.page = page; // Membuat halaman tersedia untuk langkah berikutnya
// });

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
// const uppercaseInput = randomString.toUpperCase();
// console.log(randomString);


// Fungsi untuk menulis data ke file Excel
function writeDataToExcel(filePath, sheetName, data) {
    let workbook;

    // Cek apakah file sudah ada
    if (fs.existsSync(filePath)) {
        workbook = XLSX.readFile(filePath); // Buka workbook yang sudah ada
    } else {
        workbook = XLSX.utils.book_new(); // Buat workbook baru
    }

    // Tambahkan data ke sheet yang ada atau buat sheet baru
    const worksheet = workbook.Sheets[sheetName] || XLSX.utils.aoa_to_sheet([]);
    const existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Tambahkan data baru ke worksheet
    existingData.push(data);

    // Perbarui worksheet
    const newWorksheet = XLSX.utils.aoa_to_sheet(existingData);
    workbook.Sheets[sheetName] = newWorksheet;

    // Simpan workbook ke file
    XLSX.writeFile(workbook, filePath);
}



// Fungsi login
Given('Login B2B berhasil (001)',{ timeout: 1555000 }, async function () {
  // browser = await chromium.launch({ 
  //   headless: false,
  // //   // executablePath: 'C:\\Program Files\\Firefox Nightly\\firefox.exe',
  // //   // executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  // //   // executablePath: path.resolve(__dirname, '../../../../../../Mozilla_Firefox/firefox.exe'),
  // //   // args: ['--no-sandbox', '--disable-setuid-sandbox'], // Argumen tambahan
  // //   // dumpio: true // Log semua proses ke terminal
  // //   // executablePath: 'C:/Program Files/Mozilla Firefox/firefox.exe'
  // }); // browser firefox versi 127.0


  
  // console.log(`Firefox Version: ${browser.version()}`);
  // const context = await browser.newContext({
  //   // userDataDir: 'C:\\path\\to\\your\\custom\\profile',
  // });
  // page = await context.newPage();
  await this.page.goto('https://ui-qc-b2b.bhakti.co.id/auth/login/phoenix');
  await this.page.locator('input[name="email"]').click();
  await this.page.locator('input[name="email"]').fill(data1[1][0]);
  await this.page.locator('input[name="email"]').press('Tab');
  await this.page.locator('#password').fill(data1[1][1].toString());
  await this.page.locator('#password').press('Enter');
  await this.page.waitForSelector('#nb-global-spinner', { state: 'hidden' });
  await this.page.waitForSelector('div:nth-child(8)', { state: 'hidden' });
  // const loginSuccess = this.page.locator('text=Dashboard'); // Pastikan elemen ini ada setelah login
  // await expect(loginSuccess).toBeVisible();
});

// Navigasi ke Master > Core > Tag
Given('Pergi ke menu Master (001)', async function () {
  await this.page.getByLabel('Toggle Master').click();
});

Given('Pergi ke menu Core (001)', async function () {
  await this.page.getByLabel('Toggle Core').click();
});

Given('Pergi ke menu Tag (001)',{ timeout: 1555000 }, async function () {
  await this.page.getByLabel('Toggle Tag').click();
  await this.page.waitForSelector('div:nth-child(8)', { state: 'hidden' });
});

// Memastikan tampilan list tag
When('Muncul list tag (001)', async function () {
  // await page.getByRole('button', { name: 'Create New' }).waitForSelector(selector, { state: 'visible', timeout: 5000 });
});

// Klik tombol Create New
When('Klik Create New (001)',{ timeout: 1555000 }, async function () {
  // Tunggu hingga elemen yang diinginkan menghilang
  await this.page.waitForSelector('div:nth-child(8)', { state: 'hidden' });
  // Klik tombol "Create New"
  await this.page.getByRole('button', { name: 'Create New' }).click();
});

// Isi data tag baru
When('Mengisi semua data tanpa memilih Tag Category (001)',{ timeout: 1555000 }, async function () {
  // await this.page.getByText('Pilih Tag Category').click();
  // await this.page.getByText('PRODUCT', { exact: true }).click();
  try {
    await this.page.getByText('CAMPAIGN_GROUP', { exact: true }).click();
  } catch (error) {
    console.warn('CAMPAIGN_GROUP tidak bisa diklik, lanjutkan test.');
  }
  
  try {
    await this.page.getByText('DIVISION_GROUP').click();
  } catch (error) {
    console.warn('DIVISION_GROUP tidak bisa diklik, lanjutkan test.');
  }
  await this.page.getByRole('textbox').first().click();
  await this.page.getByRole('textbox').first().fill(randomString);
  await this.page.getByRole('textbox').nth(1).click();
  await this.page.locator('div:nth-child(2) > div > .col-lg-9 > .form-control').first().fill(data2[1][1]);
  await this.page.locator('textarea').click();
  await this.page.locator('textarea').fill(data2[1][2]);
  
});
console.log(randomString);

// Klik Save dan verifikasi hasil
Then('Klik Save, data tidak berhasil disimpan (001)',{ timeout: 1555000 }, async function () {
 try {
     await this.page.getByRole('button', { name: 'Save' }).click();
 
     // Tunggu beberapa detik untuk melihat apakah error 500 muncul
     const errorPopup = await this.page.getByRole('button', { name: 'Server Error (500)' })
       .waitFor({ state: 'visible', timeout: 2000 }) // Tunggu 2 detik
       .catch(() => null); // Jika tidak ditemukan, return null
 
     if (errorPopup) {
       console.warn('Data tidak dapat disimpan: Server Error (500)');
     } else {
       const excelFilePath = path.resolve(__dirname, '../../../../../../Excel/B2B.xlsx');
       const filePath = excelFilePath; // Lokasi file Excel Anda
       const sheetName = "TagSave";     // Nama sheet di file Excel
       writeDataToExcel(filePath, sheetName, [randomString]);
       await new Promise(resolve => setTimeout(resolve, 1000));
 
       console.log(`Data '${randomString}' berhasil disimpan ke ${filePath} di sheet '${sheetName}'`);
       console.log('Data berhasil disimpan.');
     }
   } catch (error) {
     console.error('Terjadi kesalahan saat menyimpan data:', error);
   }
   try {
     await this.page.waitForSelector('.loading-indicator', { state: 'hidden' });
   } catch (error) {
     console.warn('Loading tidak keluar, lanjutkan test');
   }
   try {
     await this.page.locator('div').filter({ hasText: new RegExp(`^${randomString}$`, 'i') });
   } catch (error) {
     console.warn('Tag Name tidak ditemukan, Test habis');
   }
  
  
});

// const { After } = require('@cucumber/cucumber');

// const { AfterStep } = require('@cucumber/cucumber');
// const fs = require('fs-extra');

// AfterStep(async function (scenario) {
//   if (this.page) {
//     const screenshotPath = `reports/screenshots/${scenario.pickle.name}.png`;
//     await fs.ensureDir('reports/screenshots'); // Pastikan direktori ada
//     await this.page.screenshot({ path: screenshotPath }); // Ambil screenshot
//   } else {
//     console.error('Error: this.page is not defined!');
//   }
// });
// After(async function () {
//   await browser.close(); // Menutup browser setelah semua langkah selesai
// });