class BasePage {
  constructor() { }

  async sendKeys(dataObj) {
    for (const key of Object.keys(dataObj)) {
      await this[key].sendKeys(dataObj[key])
    }
  }
}

module.exports = {
  BasePage
}