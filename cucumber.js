module.exports = {
  default: {
    require: ['./steps/**/*.steps.js'], // Cari semua file step definitions
    //paths: ['./features/**/*.feature'], // Cari semua file feature
    format: ['progress', 'json:cucumber-report.json'], // Output format
    //publishQuiet: true // Menonaktifkan laporan otomatis ke server Cucumber
  },
};