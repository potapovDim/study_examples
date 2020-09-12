const {buildExecutor} = require('protractor-parallel-retrier');
const {resolve} = require('path');

byIt();
async function byIt() {

  const testCaseRegPattern = /(?<=it\(').+(?=')/ig;
  const cwd = process.cwd();

  const result = await buildExecutor(resolve(cwd, './protractor.conf.js'), resolve(cwd, './specs'))
    .byIt()
    .command({'--arg1': 'value_arg_1'}, {LOG_LEVEL: 'console'})
    .executor({attemptsCount: 5, maxThreads: 4, logLevel: 'VERBOSE', longestProcessTime: 60 * 1000, pollTime: 100})
    .execute();

  console.log(result);
  if(result.retriable.length || result.notRetriable.length) {
    process.exit(1);
  }
}

