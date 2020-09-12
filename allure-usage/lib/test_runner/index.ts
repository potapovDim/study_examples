import {browserInterace} from '../browser';

function wrateTest(cb) {
  return async function() {
    try {
      await cb()
    } catch (error) {
      await browserInterace.attachAllureScreenshot();
      throw error;
    }
  }

}


function wrapperIt(name, cb) {
  global.it(name, async function() {
    await wrateTest(cb).call(this);
  });
}

export {
  wrapperIt
}