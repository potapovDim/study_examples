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

