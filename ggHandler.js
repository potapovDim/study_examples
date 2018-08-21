const {exec} = require('child_process')

const a = exec('node ./gg.js')

a.stdout.on('data', console.log)

Promise.resolve().then(() => console.log('1'))

setTimeout(() => {console.log('setTimeout 2')}, 99)
setInterval(() => {console.log('main process')}, 99)