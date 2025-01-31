module.exports = {
  default: {
    require: [
      './steps/**/Tag/tambahMasterTag.steps.js',
      'hooks.js'
    ], // Sama dengan default
    format: ['json:reports/json/cucumber_report.json'],
    paths: ['./features/**/Tag/tambahMasterTag.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },

  tambah_mastertag: {
    require: [
      './steps/**/Tag/tambahMasterTag.steps.js',
      'hooks.js'
    ], // Sama dengan default
    format: ['json:reports/json/cucumber_report.json'],
    paths: ['./features/**/Tag/tambahMasterTag.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
    // worldParameters : {
    //   firefoxExecutablePath : "C:/Users/kurni/playwright-cucumber/Mozilla_Firefox"
    // }
  },
  edit_mastertag: {
    require: ['./steps/**/Tag/editMasterTag.steps.js'], // Sama dengan default
    // format: ['progress', 'json:cucumber-report.json'],
    paths: ['./features/**/Tag/editMasterTag.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  hapus_mastertag: {
    require: ['./steps/**/Tag/hapusMasterTag.steps.js'], // Sama dengan default
    // format: ['progress', 'json:cucumber-report.json'],
    paths: ['./features/**/Tag/hapusMasterTag.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  master_tag_v2: {
    require: [
      './steps/Positive/**/Tag/tambah.tag.001.steps.js',
      './steps/Positive/**/Tag/tambah.tag.002.steps.js',
      './steps/Positive/**/Tag/edit.tag.001.steps.js',
      './steps/Positive/**/Tag/hapus.tag.001.steps.js',
      'hooks.js'
    ], // Sama dengan default
    // format: ['json:reports/json/cucumber_report.json'],
    paths: [
      './features/Positive/**/Tag/tambah.tag.001.feature',
      './features/Positive/**/Tag/tambah.tag.002.feature',
      './features/Positive/**/Tag/edit.tag.001.feature',
      './features/Positive/**/Tag/hapus.tag.001.feature'
    ],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  master_tag: {
    require: ['./steps/**/Tag/*.steps.js'], // Sama dengan default
    format: ['progress', 'json:cucumber-report.json'],
    paths: ['./features/**/Tag/*.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  master_city: {
    require: [
      './steps/**/City/tambahMasterCity.steps.js',
      'hooks.js'
    ], // Sama dengan default
    // format: ['json:reports/json/cucumber_report.json'],
    paths: [
      './features/**/City/tambahMasterCity.feature',
    ],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_all: {
    require: [
      './steps/Negative/**/Tag/*.steps.js',
      'hooks.js'
    ], // Sama dengan default
    // format: ['json:reports/json/cucumber_report.json'],
    paths: [
      './features/Negative/**/Tag/*.feature',
    ],
    parallel: 2, // Menjalankan dalam 1 thread
  },
  negative_tag_001: {
    require: ['./steps/Negative/**/Tag/tambah.tag.001.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_001.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.001.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_002: {
    require: ['./steps/Negative/**/Tag/tambah.tag.002.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_002.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.002.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_003: {
    require: ['./steps/Negative/**/Tag/tambah.tag.003.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_003.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.003.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_004: {
    require: ['./steps/Negative/**/Tag/tambah.tag.004.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_004.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.004.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_005: {
    require: ['./steps/Negative/**/Tag/tambah.tag.005.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_005.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.005.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_006: {
    require: ['./steps/Negative/**/Tag/tambah.tag.006.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_006.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.006.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_007: {
    require: ['./steps/Negative/**/Tag/tambah.tag.007.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_007.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.007.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_008: {
    require: ['./steps/Negative/**/Tag/tambah.tag.008.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_008.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.008.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_009: {
    require: ['./steps/Negative/**/Tag/tambah.tag.009.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_009.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.009.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_010: {
    require: ['./steps/Negative/**/Tag/tambah.tag.010.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_010.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.010.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_011: {
    require: ['./steps/Negative/**/Tag/tambah.tag.011.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_011.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.011.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_012: {
    require: ['./steps/Negative/**/Tag/tambah.tag.012.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_012.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.012.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_013: {
    require: ['./steps/Negative/**/Tag/tambah.tag.013.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_013.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.013.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_014: {
    require: ['./steps/Negative/**/Tag/tambah.tag.014.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_014.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.014.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_015: {
    require: ['./steps/Negative/**/Tag/tambah.tag.015.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_015.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.015.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
  negative_tag_016: {
    require: ['./steps/Negative/**/Tag/tambah.tag.016.steps.js', 'hooks.js'], // Sama dengan default
    format: ['json:reports/json/neg_tambah_tag_016.json'],
    paths: ['./features/Negative/**/Tag/tambah.tag.016.feature'],
    parallel: 1, // Menjalankan dalam 1 thread
  },
};