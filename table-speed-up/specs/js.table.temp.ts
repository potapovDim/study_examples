import {ElementFinder, browser, ExpectedConditions, $, Browser} from 'protractor';
import {login} from './login.util';
import * as isDisplayedSelenium from 'selenium-webdriver/lib/atoms/is-displayed';


console.log(isDisplayedSelenium)

const getData = `
  function getBodyData(tableRoot) {
   const isDisplayed = ${isDisplayedSelenium.toString()}
   const headerNodeRoot = tableRoot.querySelector('thead')
   const bodyNodeRoot = tableRoot.querySelector('tbody')

   function checVisibility(nodeItem) {
      const isDisp = isDisplayed(nodeItem)
      if(isDisp) {
        return nodeItem;
      }
      throw new Error('item is not visilbe')
   }

   function getTableHeaderMap(headerNode) {

     const headerMap = Array
       .from(headerNode.querySelectorAll('td'))
       .reduce((acc, currnetcell, index) => {
         acc[checVisibility(currnetcell) .innerText.trim()] = index;
         return acc;
       }, {})

     return headerMap;
   }

   const headerMap = getTableHeaderMap(headerNodeRoot);


   function getRowData(row) {
     const rowCells = row.querySelectorAll('td')

     const rowCellsData = Object.keys(headerMap).reduce((acc, key) => {
       acc[key] = checVisibility(rowCells[headerMap[key]]) .innerText.trim()
       return acc;
     }, {})

     return rowCellsData
   }

   const bodyRowsData = Array
     .from(bodyNodeRoot.querySelectorAll('tr'))
     .map((rowNode) => {
       return getRowData(rowNode)
     })

   return bodyRowsData
  }

  return getBodyData(arguments[0])
`


const {LOG} = process.env;

class Table {
  tableRoot: ElementFinder;

  constructor(element) {
    this.tableRoot = element;
  }

  private async _isVisible(el) {
    await browser.wait(ExpectedConditions.visibilityOf(el), 50);
    return el;
  }

  async getTableDataJsImplementation() {
    await this._isVisible(this.tableRoot);

    return browser.executeScript(getData, this.tableRoot.getWebElement());
  }
}

describe('JS implementation data table', function() {
  beforeEach('Login', async () => {
    await browser.get('http://localhost:3000');
  });

  it('get table data', async function() {
    const table = new Table($('.machies_list_section table'))

    await login();
    const data = await table.getTableDataJsImplementation();

    console.log(data)
  })
})