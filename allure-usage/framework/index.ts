import {allure} from 'allure-mocha/runtime'
import {ContentType} from 'allure-js-commons';
import {MainPage, IMainPage} from './pages';
import {browserInterace} from '../lib/browser'
import {expect, initStepDeclarator} from 'assertior';
import {wrappedIt} from '../lib/test_runner'

function allureStep(stepAssertionName: string, error, current, expected) {
  // @ts-ignore
  const step = allure.startStep(stepAssertionName);
  allure.attachment('Expected value', JSON.stringify(expected, null, 2), ContentType.JSON);
  allure.attachment('Current value', JSON.stringify(current, null, 2), ContentType.JSON);
  if (error) {
    allure.attachment('Error', JSON.stringify(error, null, 2), ContentType.JSON);
    step.step.stepResult.status = 'failed';
    return step.endStep();
  }
  step.step.stepResult.status = 'passed';
  return step.endStep();

}
initStepDeclarator(allureStep);

const provider = {
  pages: {
    main(): IMainPage {
      return new MainPage();
    }
  },
  get packages() {
    return {expect};
  },
  get browser() {
    return browserInterace;
  },
  get testRunner() {
    return {it: wrappedIt};
  }
}

export {
  provider
}
