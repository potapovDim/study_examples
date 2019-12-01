const { exec } = require('child_process')

const { DEBUG } = process.env

function wrapExec(cmd, stackAnalyzer) {
  return new Promise((resolve) => {
    let stackFromProc = null
    const proc = exec(cmd, (err, stdout, stderr) => {
      if (err) {
        DEBUG && console.log(err)
      }
      DEBUG && console.log(`Stdout is : ${stdout.toString('utf8')}`)
      stackFromProc = stdout.toString('utf8')
    })

    proc.on('close', (code, signal) => {
      DEBUG && console.log('CLOSE ARGS ARE: ', code, signal)
      if (stackAnalyzer) {
        resolve(stackAnalyzer(cmd, stackFromProc))
      } else {
        code === 0 ? resolve(null) : resolve(cmd)
      }
    })

    proc.on('exit', (code, signal) => {
      DEBUG && console.log('EXIT ARGS ARE: ', code, signal)
    })
  })
}

module.exports = {
  wrapExec
}
