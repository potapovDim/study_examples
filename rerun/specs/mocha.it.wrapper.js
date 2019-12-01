const { AssertionError } = require('chai')

function itMochaWrapper(testTitle, specFunction) {
  it(testTitle, async function () {
    try {
      await specFunction()
    } catch (error) {
      if (!(error instanceof AssertionError)) {
        console.log(`RERUN_TEST:${testTitle}`)
      }
      throw error
    }
  })
}

module.exports = {
  it: itMochaWrapper
}
