const expect = require('chai').expect

const { MainPage, CatalogPage } = require('../page_objects')

describe('First suit', function () {

  const mainPage = new MainPage()
  const catalogPage = new CatalogPage()

  it('first test', async function () {
    const searchValue = 'телефон samsung'

    await browser.get('https://rozetka.com.ua/')
    await mainPage.searchItems(searchValue)
    const catalogTitleValue = await catalogPage.getTitleBlockInfo()

    expect(catalogTitleValue.toLowerCase()).to.include('samsung')
  })
})
