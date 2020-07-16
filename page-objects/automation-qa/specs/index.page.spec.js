const {expect} = require('chai')
const {IndexPage} = require('../pages/index.page')

describe('Set values to fields', function() {

  // this.text1 = $('#text1')
  // this.text2 = $('#text2')
  // this.text3 = $('#text3')
  // this.text4 = $('#text4')
  // this.text5 = $('#text5')
  // this.text6 = $('#text6')
  // this.text7 = $('#text7')
  // this.text8 = $('#text8')

  const indexPage = new IndexPage()

  beforeEach(async function() {
    browser.waitForAngularEnabled(false)
    await browser.get('http://localhost:8081/');
  })

  it('set first and second fields', async function() {
    const dataObj = {
      text1: 'text 1 from test 1',
      text2: 'text 2 from test 1'
    }
    await indexPage.sendKeys(dataObj)
    await browser.sleep(3000);
  });
  it('set second and third fields', async function() {
    const dataObj = {
      text2: 'text 2 from test 2',
      text3: 'text 3 from test 2'
    }
    await indexPage.sendKeys(dataObj)
    await browser.sleep(3000);
  })
});