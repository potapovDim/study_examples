const {seleniumWD} = require('promod');
const {waitForCondition, compareToPattern} = require('sat-utils');
const {$, $$, browser, getSeleniumDriver} = seleniumWD;

executeTest()
async function executeTest() {
  try {
    await getSeleniumDriver(browser);

    await browser.get(`file:///${__dirname}/index.html`);
    const button = $('button');
    const ulLis = $$('li');

    async function getPageContent() {
      const buttonContent = await button.getText();

      const ulContent = []
      await ulLis.each(async (liItem) => {
        ulContent.push({text: await liItem.getText()})
      })

      return {
        button: {
          content: {
            buttonContent,
          }
        },
        ul: ulContent,
      }
    }

    let errorMessage;
    await waitForCondition(async () => {
      const pageConten = await getPageContent();
      const pattern = {
        button: {
          content: {
            buttonContent: 'Text was changed',
          }
        },
        ul: {text: 'Item 1', length: 3}
      }

      const {result, message} = compareToPattern(pageConten, pattern, {
        strictArrays: false,
      })

      errorMessage = message;

      return result;
    }, {timeout: 8000, interval: 2500, createMessage: () => errorMessage})

    const result = await getPageContent();
    console.log(result)


  } finally {
    await browser.quitAll();
  }
}
