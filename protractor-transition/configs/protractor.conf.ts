import {Config, browser} from 'protractor';
import {resolve} from 'path';
import {buildCommonConf, getSeleniumAddress} from './common';
import {getBaseUrl} from './urls';
import {pubsub, events} from '../transition/pubsub';

Object.defineProperty(global, 'frameworkOpts', {
  value: {baseFrameworkPath: resolve(__dirname, '../framework/pages'), fragmentsPattern: '.fragment.'}
});

const config: Config = {
  // init common config
  ...buildCommonConf(),
  // directConnect: true,
  // Connecting directly to ChromeDriverServer
  allScriptsTimeout: 30 * 1000,
  // local run with selenium server
  seleniumSessionId: process.env.SELENIUM_SESSION_ID,
  seleniumAddress: getSeleniumAddress(),
  baseUrl: getBaseUrl(),
  logLevel: 'ERROR',
  // Needed to make async/await work. Disables control flow.
  SELENIUM_PROMISE_MANAGER: false,

  onPrepare: async () => {
    await browser.waitForAngularEnabled(false);

    pubsub.publish(events.updateClient, browser);
  }
};


export {
  config
};
