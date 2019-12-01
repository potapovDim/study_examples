const { rerunner, getFilesListWithSubDirs } = require('./rerun')

function procStackAnalyzer(cmd, stackTrace) {

  const patterForSperRerun = /(?<=RERUN_TEST:)(.*)+/ig
  const matchedStack = stackTrace.match(patterForSperRerun)

  if (!matchedStack) {
    return null
  } else {
    return `${cmd} -g "${matchedStack.join('|')}" `
  }
}

function createMochaCmd(pathToSpecFile) {
  return `./node_modules/.bin/mocha ${pathToSpecFile} --reporter mocha-allure-reporter`
}

const commandsList = getFilesListWithSubDirs('./specs')
  .map(createMochaCmd)

rerunner(commandsList, 10, 5, procStackAnalyzer).then(console.log)