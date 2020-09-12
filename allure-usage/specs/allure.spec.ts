import {provider} from '../framework'
import {allure} from 'allure-mocha/runtime'
const {pages} = provider;
const {browser} = provider;
const {expect} = provider.packages;
const {it} = provider.testRunner;


describe('Allure training suite', function() {
  it('Allure training spec', async function() {
    const page = pages.main();

    await allure.step('Navigation', async () => browser.get('http://localhost:4000'));
    await allure.step('Click actions ', async () => {
      await page.click({header: {register: null}});
      await page.click({header: {login: null}});
    })
    await allure.step('Assertions block', async () => {
      const {header: {login}} = await page.get({header: {login: null}});
      expect(login).toEqual('test', 'Login button text should be "test"');
    })
  })
})
