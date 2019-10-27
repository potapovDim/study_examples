exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['github.spec.js'],
  framework: 'mocha',
  mochaOpts: {
    timeout: 20 * 1000
  },
  SELENIUM_PROMISE_MANAGER: false
};