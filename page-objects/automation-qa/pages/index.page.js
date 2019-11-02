const { BasePage } = require('./base.page')

class IndexPage extends BasePage {

  constructor() {
    super()
    this.title = $('h1')
    this.text1 = $('#text1')
    this.text2 = $('#text2')
    this.text3 = $('#text3')
    this.text4 = $('#text4')
    this.text5 = $('#text5')
    this.text6 = $('#text6')
    this.text7 = $('#text7')
    this.text8 = $('#text8')
    this.initPageInfo = $('button')
  }
}

module.exports = {
  IndexPage
}