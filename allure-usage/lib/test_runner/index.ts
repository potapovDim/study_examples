import {browserInterace} from '../browser';

function wrapedTest(cb) {
  return async function() {
    try {
      await cb()
    } catch (error) {
      await browserInterace.attachAllureScreenshot();
      throw error;
    }
  }
}

function wrappedIt(name, cb) {
  global.it(name, async function() {
    await wrapedTest(cb).call(this);
  });
}

export {
  wrappedIt
}