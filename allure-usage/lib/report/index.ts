import {stepAllure, attachScreenshot, attachJsonData} from './allure';


function step(stepName: string | Function) {
  return function(_target, _name, descriptor) {
    const originalValue = descriptor.value;

    descriptor.value = function(...args) {
      let localStepName = stepName;
      localStepName = '\n' + ((typeof localStepName === 'string' ? localStepName : localStepName(this.name)) as string);

      if (this.constructor.name.includes('Fragment')) {
        localStepName = `\t ${localStepName} arguments ${JSON.stringify(args)}`
      }

      if (this.constructor.name.includes('Browser')) {
        localStepName = `${localStepName}  ${args[0] ? args[0] : ''}`
      }
      return stepAllure(localStepName, originalValue.bind(this, ...args));
    }

    return descriptor;
  }
}

export {
  step,
  attachScreenshot,
  attachJsonData
}