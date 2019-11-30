const { exec } = require('child_process')

const { DEBUG } = process.env

function wrapExec(cmd) {
  return new Promise((resolve) => {
    const proc = exec(cmd, (err, stdout, stderr) => {
      if (err) {
        DEBUG && console.log(err)
      }
      DEBUG && console.log(`Stdout is : ${stdout.toString('utf8')}`)
    })

    proc.on('close', (code, signal) => {
      DEBUG && console.log('CLOSE ARGS ARE: ', code, signal)
      code === 0 ? resolve(null) : resolve(cmd)
    })

    proc.on('exit', (code, signal) => {
      DEBUG && console.log('EXIT ARGS ARE: ', code, signal)
    })
  })
}

module.exports = {
  wrapExec
}
