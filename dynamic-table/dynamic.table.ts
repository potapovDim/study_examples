import {element, by, browser} from 'protractor';
import * as isDisplayedSelenium from 'selenium-webdriver/lib/atoms/is-displayed';

interface DynamicTableValues {
  expectedCount?: number;
  clickRow?: {[k: string]: string};
}

interface IDetDataObject {
  expectedCount?: number;
}

const getTableHeaderMap = `
function getTableHeader(root) {
  const isDisplayed = ${isDisplayedSelenium.toString()};
  const headerModel = Array
    .from(root.querySelector('.dynamic_table_header').querySelectorAll('div'))
    .reduce((acc, cell, index) => {
      if (!isDisplayed(cell)) {
        throw new Error('Cell number ' + index + 'is not visible');
      }
      acc[cell.innerText.trim()] = index;
      return acc;
    }, {});
  return headerModel;
}`;

const getTableData = `
  const isDisplayed = ${isDisplayedSelenium.toString()};
  const root = arguments[0]
  const headerMap = arguments[1]
  const expectedCount = arguments[2]
  const cb = arguments[arguments.length - 1]


  async function getTableData(root, headerModel, expectedCount, callback) {
      const sleep = (t = 1) => new Promise((res) => setTimeout(res, t));
      let bodyRows = root.querySelector('.dynamic_table_body').querySelectorAll('.dynamic_table_row');

         while (expectedCount > bodyRows.length) {
           bodyRows[bodyRows.length - 1].scrollIntoView();
           await sleep();
           bodyRows = root.querySelector('.dynamic_table_body').querySelectorAll('.dynamic_table_row');
         }

            const data = Array
              .from(bodyRows)
              .map((row, rowIndex) => {
                const rowCells = Array.from(row.querySelectorAll('div'));
                return Object.keys(headerModel).reduce((acc, key) => {

                  if (!isDisplayed(rowCells[headerModel[key]])) {
                    throw new Error('Element not visible');
                  }

                 acc[key] = {text: rowCells[headerModel[key]].innerText.trim()};
                 return acc;
               }, {});
             });
      callback(data)
  }

  getTableData(root, headerMap, expectedCount, cb)`
  ;


class DynamicTable {
  private rootElement: any
  public constructor(el) {
    this.rootElement = el;
  }

  public async get({expectedCount}: IDetDataObject = {expectedCount: 0}): Promise<Array<object>> {

    const tableHeaderModel = await browser
      .executeScript(`
            const getTableHeaderMap = ${getTableHeaderMap};
            return  getTableHeaderMap(arguments[0])
            `,
        this.rootElement.getWebElement());

    const data = await browser.executeAsyncScript(getTableData,
      this.rootElement,
      tableHeaderModel,
      expectedCount
    ) as Array<object>;

    return data;
  }
}

export {DynamicTable, DynamicTableValues};
