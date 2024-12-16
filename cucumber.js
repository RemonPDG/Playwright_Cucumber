module.exports = {
  default: {
    require: ['./steps/**/*.steps.js'], // Cari semua file step definitions
    paths: ['./features/**/*.feature'], // Cari semua file feature
    format: ['progress', 'json:cucumber-report.json'], // Output format
    parallel: 1, // Menjalankan dalam 1 thread
    //publishQuiet: true // Menonaktifkan laporan otomatis ke server Cucumber
  },

  tambah_mastertag: {
    require: ['./steps/**/Tag/tambahMasterTag.steps.js'], // Sama dengan default
    format: ['progress', 'json:cucumber-report.json'],
    paths: ['./features/**/Tag/tambahMasterTag.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
    // worldParameters : {
    //   firefoxExecutablePath : "C:/Users/kurni/playwright-cucumber/Mozilla_Firefox"
    // }
  },
  edit_mastertag: {
    require: ['./steps/**/Tag/editMasterTag.steps.js'], // Sama dengan default
    format: ['progress', 'json:cucumber-report.json'],
    paths: ['./features/**/Tag/editMasterTag.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  hapus_mastertag: {
    require: ['./steps/**/Tag/hapusMasterTag.steps.js'], // Sama dengan default
    format: ['progress', 'json:cucumber-report.json'],
    paths: ['./features/**/Tag/hapusMasterTag.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  master_tag_v2: {
    require: [
      './steps/**/Tag/tambahMasterTag.steps.js',
      './steps/**/Tag/editMasterTag.steps.js',
      './steps/**/Tag/hapusMasterTag.steps.js'
    ], // Sama dengan default
    format: ['progress', 'json:cucumber-report.json'],
    paths: [
      './features/**/Tag/tambahMasterTag.feature',
      './features/**/Tag/editMasterTag.feature',
      './features/**/Tag/hapusMasterTag.feature'
    ],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  master_tag: {
    require: ['./steps/**/Tag/*.steps.js'], // Sama dengan default
    format: ['progress', 'json:cucumber-report.json'],
    paths: ['./features/**/Tag/*.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
};