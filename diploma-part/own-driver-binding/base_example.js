const fetch = require('node-fetch')

const simpleCapabilities = {
  desiredCapabilities: {
    platform: 'ANY',
    browserName: 'chrome'
  }
}


fetch('http://localhost:9515/session', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(simpleCapabilities)
}).then(_ => _.json()).then(console.log)