import {browser, ExpectedConditions} from 'protractor';

interface DynamicTableValues {
  expectedCount?: number;
  clickRow?: {[k: string]: string};
}

interface IDetDataObject {
  expectedCount?: number;
}

class DynamicTableCommonApproach {
  private rootElement: any

  constructor(root) {
    this.rootElement = root;
  }

  public async get({expectedCount}: IDetDataObject = {expectedCount: 0}): Promise<Array<object>> {
    await browser.wait(ExpectedConditions.visibilityOf(this.rootElement), 1000);
    await browser.wait(ExpectedConditions.visibilityOf(this.rootElement.$('.dynamic_table_body')), 1000);
    let tableBodyRows = this.rootElement.$('.dynamic_table_body').$$('.dynamic_table_row');
    let rowsCount = await tableBodyRows.count();

    while (expectedCount > rowsCount) {
      await this.swipeBottomRow(tableBodyRows.get(rowsCount - 1));
      tableBodyRows = this.rootElement.$('.dynamic_table_body').$$('.dynamic_table_row');
      rowsCount = await tableBodyRows.count();
    }

    const headerMap = await this.getTableHeaderMap();
    const data = [];
    for (let i = 0; i < rowsCount; i++) {
      data.push(await this.buildRowObject(tableBodyRows.get(i), headerMap));
    }

    return data;
  }

  async buildRowObject(row, header) {
    const cells = row.$$('div');
    const rowData = {};
    for (const key of Object.keys(header)) {
      await browser.wait(ExpectedConditions.visibilityOf(cells.get(header[key])), 1000);
      rowData[key] = {text: (await cells.get(header[key]).getText()).trim()};
    }
    return rowData;
  }

  async swipeBottomRow(row) {
    await browser.executeScript((el) => el.scrollIntoView(), row.getWebElement());
  }

  async getTableHeaderMap() {
    const headerRowCells = this.rootElement.$('.dynamic_table_header').$$('div');
    const count = await headerRowCells.count();
    const headerMap = {};
    for (let i = 0; i < count; i++) {
      headerMap[(await headerRowCells.get(i).getText()).trim()] = i;
    }
    return headerMap;
  }
}

export {DynamicTableCommonApproach};
