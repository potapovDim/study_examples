const { TitleBlockFragment } = require('./fragments')
const { waitForElementVisible } = require('../commons')

class CatalogPage {
  constructor() {
    this.titleBlock = new TitleBlockFragment()
  }

  async getTitleBlockInfo() {
    await waitForElementVisible(this.titleBlock.root, 10 * 1000, 'Title block should be visible')
    return this.titleBlock.title.getText()
  }
}

module.exports = {
  CatalogPage
}