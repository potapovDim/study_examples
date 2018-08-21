const startTime = +Date.now()
const fs = require('fs')


fs.readFile('./lol.js', function(err, data) {
  console.log(data)
})

setTimeout(() => {console.log('time from call back', +Date.now() - startTime)}, 0)
setImmediate(() => {console.log('time from call back in imediate', +Date.now() - startTime)})

while(+Date.now() - startTime < 100) {}