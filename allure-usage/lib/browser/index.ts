import {browser} from 'protractor';
import {step, attachScreenshot, attachJsonData} from '../report'


class Browser {
  constructor() {

  }

  @step('Browser execute navigate to ')
  async get(url) {
    await browser.get(url);
  }

  @step('Browser return url')
  async getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  @step('Browser attach allure screenshot')
  async attachAllureScreenshot(name = 'Screenshot') {
    const png = await browser.takeScreenshot();
    const url = await browser.getCurrentUrl();
    const lsData = await browser.executeScript('return {...localStorage};')
    await attachJsonData('Current local storage data', JSON.stringify(lsData));
    await attachScreenshot(`${name} currnet url: ${url}`, png);
  }
}


const browserInterace = new Browser();

export {
  browserInterace
}
