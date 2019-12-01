const { wrapExec } = require('./exec.wrapper')
const { DEBUG } = process.env

const sleep = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms))

async function rerunner(commandsArr, rerunCount = 3, threadsCount = 2, stackAnalyzer) {
  let counter = 0

  async function rerunCommands(cmds, failedCommands = []) {
    async function executeOneCommand() {
      if (counter < threadsCount && cmds.length) {
        counter++
        const cmd = await wrapExec(cmds.splice(0, 1)[0], stackAnalyzer)
        if (cmd) {
          failedCommands.push(cmd)
        }
        counter--
      }
    }

    const watcher = setInterval(executeOneCommand, 100)

    do {
      await executeOneCommand()
      if (cmds.length || counter) {
        await sleep(250)
      }
    } while (cmds.length || counter)

    clearInterval(watcher)

    return failedCommands
  }

  const failedCommands = await Array.from(Array(rerunCount)).reduce((acc, cur, index) => {
    return acc
      .then((resolvedCommands) => rerunCommands(resolvedCommands))
      .then((results) => {
        console.log(`Execution index is: ${index}`)
        console.log('______________________________________')
        console.log('Failed commands is', results)
        console.log('______________________________________')
        return results
      })
  }, Promise.resolve(commandsArr))

  return failedCommands
}

module.exports = {
  rerunner
}
