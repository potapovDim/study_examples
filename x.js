const {spawn} = require('child_process')

const log = spawn('node', ['-e', "console.log(`hhhh`)"], {stdio: 'inherit'})

process.nextTick(() => console.log('next tick'))
// Promise.resolve().then(() => console.log('in promise'))
console.log('sync func 1')
console.log('sync func 2')
console.log('sync func 3')
console.log('sync func 4')
console.log('sync func 5')
console.log('sync func 6')
console.log('sync func 7')

setTimeout(() => console.log('setTimeout'), 0)
setImmediate(() => console.log('setImmediate'))
