const { rerunner, getFilesListWithSubDirs } = require('./rerun')

function createMochaCmd(pathToSpecFile) {
  return `./node_modules/.bin/mocha ${pathToSpecFile}`
}

const commandsList = getFilesListWithSubDirs('./specs')
  .map(createMochaCmd)

rerunner(commandsList, 10, 5).then(console.log)