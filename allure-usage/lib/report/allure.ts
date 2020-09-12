import {allure} from 'allure-mocha/runtime'
import {ContentType} from 'allure-js-commons';

async function attachScreenshot(title, png) {
  return allure.attachment(title, Buffer.from(png, 'base64'), ContentType.PNG);
}

function attachJsonData(title: string, data: string) {
  return allure.attachment(title, data, ContentType.JSON);
}

async function stepAllure(name, cb) {
  // @ts-ignore
  const step = allure.startStep(name);

  try {
    const result = await cb();
    if (result) {
      allure.attachment(`${name} result`, JSON.stringify(result), ContentType.JSON);
    }
    step.step.stepResult.status = 'passed';

    step.endStep();

    return result;

  } catch (error) {

    step.step.stepResult.status = 'broken';
    step.endStep();

    throw error;
  }

}

export {
  stepAllure,
  attachScreenshot,
  attachJsonData,
}