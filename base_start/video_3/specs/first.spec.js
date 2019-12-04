const expect = require('chai').expect
const EC = protractor.ExpectedConditions

const {MainPage} = require('../page_objects/main')

describe('First suit', function () {

  const maniPage = new MainPage()

  it('first test', async function () {
    const searchValue = 'телефон samsung'

    const searchInputSelector = 'body > app-root > div > div:nth-child(2) > div.app-rz-header > header > div > div.header-bottomline > div.header-search.js-app-search-suggest > form > div > div > input'
    const searchInput = $(searchInputSelector)

    const searchButtonSelector = 'body > app-root > div > div:nth-child(2) > div.app-rz-header > header > div > div.header-bottomline > div.header-search.js-app-search-suggest > form > button'
    const searchButton = $(searchButtonSelector)

    const catalogTitleSelector = '#title_page > div > div > div:nth-child(2) > h1'
    const catalogTitle = $(catalogTitleSelector)

    await browser.get('https://rozetka.com.ua/')

    await browser.wait(EC.visibilityOf(searchInput), 5000, 'Search input should be visible')
    await browser.wait(EC.visibilityOf(searchButton), 5000, 'Search button should be visible')

    await searchInput.sendKeys(searchValue)
    await searchButton.click()

    await browser.wait(EC.visibilityOf(catalogTitle), 10000, 'Catalog title should be visible')

    const catalogTitleValue = await catalogTitle.getText()

    expect(catalogTitleValue.toLowerCase()).to.include('samsung')
  })
})
