class ElementFinder {
  constructor(selector) {
    this.selector = selector
  }

  sendKeys(value) {
    console.log(`Send keys from element finder with selector ${this.selector}, value is ${value}`)
  }
}



class IndexPage {

  constructor() {
    this.title = new ElementFinder('h1')
    this.text1 = new ElementFinder('#text1')
    this.text2 = new ElementFinder('#text2')
    this.text3 = new ElementFinder('#text3')
    this.text4 = new ElementFinder('#text4')
    this.text5 = new ElementFinder('#text5')
    this.text6 = new ElementFinder('#text6')
    this.text7 = new ElementFinder('#text7')
    this.text8 = new ElementFinder('#text8')
    this.initPageInfo = new ElementFinder('button')
  }

  sendKeys(dataObj) {
    for (const key of Object.keys(dataObj)) {
      this[key].sendKeys(dataObj[key])
    }
  }
}


const indexPage = new IndexPage()

const dataObj = {
  text1: 'value 1',
  text8: 'value 8',
  text4: 'value 4'
}

indexPage.sendKeys(dataObj)