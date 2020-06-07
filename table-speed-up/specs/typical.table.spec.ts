import {ElementFinder, browser, ExpectedConditions, $, Browser} from 'protractor';
import {login} from './login.util';

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

  async getTableDataTypicalImplementation() {
    const headerMap = await this.buildHeaderMap();
    const data = await this.getBodyData(headerMap);
    return data;
  }

  private async getBodyData(headerMap: object) {
    const bodyRows = this.tableRoot.$$('tbody tr');
    const bodyRowsData = [];

    const count = await bodyRows.count();

    for (let i = 0; i < count; i++) {
      bodyRowsData.push(await this._buildBodyRowData(headerMap, bodyRows.get(i)));
    }
    return bodyRowsData;
  }

  private async _buildBodyRowData(headerMap: Object, bodyRow: ElementFinder) {
    const bodyRowData = {};
    for (const key of Object.keys(headerMap)) {
      const bodyRowCell = await this._isVisible(bodyRow.$$('td').get(headerMap[key]));
      bodyRowData[key] = (await bodyRowCell.getText()).trim();
    }
    if (LOG) console.log(bodyRowData)
    return bodyRowData;
  }

  private async buildHeaderMap() {
    const headerRow = await this._isVisible(this.tableRoot.$('thead tr'));
    const headerRowCells = headerRow.$$('td');
    const headerMap = {};
    const count = await headerRowCells.count();

    for (let i = 0; i < count; i++) {
      headerMap[await headerRowCells.get(i).getText()] = i;
    }
    if (LOG) console.log(headerMap);
    return headerMap
  }
}


describe('Default data table', function() {
  beforeEach('Login', async () => {
    await browser.get('http://localhost:3000');
  });

  it('get table data', async function() {
    const table = new Table($('.machies_list_section table'))

    await login();
    const data = await table.getTableDataTypicalImplementation();

    console.log(data)
  })
})