exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/**/*.spec.js'],
  framework: 'mocha',
  SELENIUM_PROMISE_MANAGER: false,
  mochaOpts: {
    timeout: 100000
  },
}
