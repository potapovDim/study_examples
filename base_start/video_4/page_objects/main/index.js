const { HeaderFramgent } = require('./fragments')
const { waitForElementVisible } = require('../commons')

class MainPage {
  constructor() {
    this.header = new HeaderFramgent()
  }

  async searchItems(searchValue) {
    await waitForElementVisible(this.header.root)
    await this.header.searchInput.sendKeys(searchValue)
    await this.header.searchButton.click()
  }
}

module.exports = {
  MainPage
}