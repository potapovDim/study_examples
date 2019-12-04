const searchInputSelector = 'body > app-root > div > div:nth-child(2) > div.app-rz-header > header > div > div.header-bottomline > div.header-search.js-app-search-suggest > form > div > div > input'
const searchInput = $(searchInputSelector)

const searchButtonSelector = 'body > app-root > div > div:nth-child(2) > div.app-rz-header > header > div > div.header-bottomline > div.header-search.js-app-search-suggest > form > button'
const searchButton = $(searchButtonSelector)


class HeaderFramgent {
  constructor() {
    this.root = $('header.header')
    this.searchInput = this.root.$('input[name="search"]')
    this.searchButton = this.root.$('button.search-form__submit')
  }

  
}

module.exports = {
  HeaderFramgent
}

