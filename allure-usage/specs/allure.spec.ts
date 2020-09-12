import {allure} from 'allure-mocha/runtime';

import {expect, initStepDeclarator} from 'assertior';
import {provider} from '../framework'

const {pages} = provider;
const {browser} = provider;
const {it} = provider;

function allureStep(stepAssertionName: string, error, expected, current) {
  //@ts-ignore
  const step = allure.startStep(stepAssertionName);
  //@ts-ignore
  allure.attachment('Expected value', JSON.stringify(expected, null, 2), 'application/json');
  //@ts-ignore
  allure.attachment('Current value', JSON.stringify(current, null, 2), 'application/json');
  if (error) {
    //@ts-ignore
    allure.attachment('Error', JSON.stringify(error, null, 2), 'application/json');
  }
  step.step.stepResult.status = error ? 'failed' : 'passed';
  step.endStep();
}
initStepDeclarator(allureStep)

describe('Allure training suite', function() {

  it('Allure training spec', async function() {
    const page = pages.main();

    await allure.step('navigation', async () => browser.get('http://localhost:4000'));

    await allure.step('clicks', async () => {
      await page.click({header: {register: null}});
      await page.click({header: {login: null}});
    })

    await allure.step('Data check', async () => {
      const {header: {login}} = await page.get({header: {login: null}});
      expect(login).toEqual('test', 'Login button text should be "test"');
    })

  })
})
