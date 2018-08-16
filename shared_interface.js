class Element {
  constructor(selector) {
    this.selector = selector
  }
  sendKeys(...args) {
    console.log('element send keys', args, this.selector)
  }
}


class PageObject {
  constructor() {
    this.name = new Element('input[name]')
    this.password = new Element('input.password')
    this.age = new Element('input[type="text"]')
    this.street = new Element('input.street')
  }

  sendKeys(dataObj) {
    for(const key of Object.keys(dataObj)) {this[key].sendKeys(dataObj[key])}
  }
}

const data_1 = {
  name: 'test name 1',
  street: 'test street 1'
}

const data_2 = {
  name: 'test name 2',
  street: 'test street 2',
  age: 'test age 2'
}

const po = new PageObject()

po.sendKeys(data_1)
console.log('_______________________')
po.sendKeys(data_2)
