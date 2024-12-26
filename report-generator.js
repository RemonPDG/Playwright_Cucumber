const reporter = require('multiple-cucumber-html-reporter');
const path = require('path');

reporter.generate({
  jsonDir: 'reports/json/',  // Folder yang berisi cucumber_report.json
  reportPath: 'reports/html/', // Folder untuk laporan HTML
  launchReport: true,
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest',
    },
    device: 'Local Test Machine',
    platform: {
      name: 'Windows',
      version: '10',
    },
  },
  customData: {
    title: 'B2B Automation Report',
    data: [
      { label: 'Project', value: 'Playwright-Cucumber' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Environment', value: 'Local' },
    ],
  },
});
