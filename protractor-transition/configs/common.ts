import {getBrowsersCaps} from './capabilities';
import * as path from 'path';

const {LOG_LEVEL = 'console', MOCHA_TIMEOUT, SELENIUM_HOST, SELENIUM_PORT} = process.env;


function buildCommonConf() {
  const mochaOpts = {
    timeout: MOCHA_TIMEOUT ? +MOCHA_TIMEOUT : 300 * 1000,
    fullTrace: true,
    reporter: LOG_LEVEL === 'allure' ? 'allure-mocha' : 'spec'
  };

  const basePath = path.resolve(__dirname, '../specs');
  const multiCapabilities = getBrowsersCaps();
  const fileExtention = __filename.includes('js') ? 'js' : 'ts';
  const specs = [`${basePath}/**/*.spec.${fileExtention}`];

  return {
    framework: 'mocha',
    specs,
    mochaOpts,
    multiCapabilities
  };
}

function getSeleniumAddress() {
  if (!SELENIUM_HOST) {
    return SELENIUM_HOST;
  }
  if (SELENIUM_HOST.startsWith('http')) {
    return `${SELENIUM_HOST}${SELENIUM_PORT ? ':' + SELENIUM_PORT : ''}/wd/hub`;
  }
  if (!SELENIUM_HOST.startsWith('http://')) {
    return `http://${SELENIUM_HOST}${SELENIUM_PORT ? ':' + SELENIUM_PORT : ''}/wd/hub`;
  }
}

export {
  buildCommonConf,
  getSeleniumAddress,
};
