const expect = require('chai').expect
const EC = protractor.ExpectedConditions

const { MainPage, CatalogPage } = require('../page_objects')

describe('First suit', function () {

  beforeEach(async function () {
    await browser.driver.manage().window().maximize()
  })

  const mainPage = new MainPage()
  const catalogPage = new CatalogPage()

  it('first test', async function () {
    const searchValue = 'телефон samsung'

    await browser.get('https://rozetka.com.ua/')
    await mainPage.searchItems(searchValue)
    const catalogTitleValue = await catalogPage.getTitleBlockInfo()

    expect(catalogTitleValue.toLowerCase()).to.include('samsung')
  })

  it('second test', async function () {
    await browser.get('https://rozetka.com.ua/mobile-phones/c80003/producer=samsung/#search_text=%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD+samsung')

    const catalogBlockRootSelector = '#catalog_goods_block'
    const catalogBlockRoot = $(catalogBlockRootSelector)

    const catalogItemTitleSelector = '.g-i-tile-i-title.clearfix'
    const catalogItemTitles = catalogBlockRoot.$$(catalogItemTitleSelector)

    await browser.wait(EC.visibilityOf(catalogBlockRoot), 10 * 1000, 'Catalog root should be visible')

    const catalogItemsTitleValues = await catalogItemTitles.map(function (titleItem) {
      return titleItem.getText()
    })

    catalogItemsTitleValues.forEach(function (titleValue) {
      console.log(titleValue)
      expect(titleValue.toLowerCase()).to.include('samsung')
    })
  })
})
