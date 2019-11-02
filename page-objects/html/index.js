const fakeServer = require('test-fake-server')
const fetch = require('node-fetch')
const path = require('path')

const indexHtml = path.resolve(__dirname, './index.html')
const pageA = path.resolve(__dirname, './page.a.html')
const model = {
  "port": "8081",
  "api": [{
    "method": "GET",
    "path": "/",
    "response": indexHtml
  },
  {
    "method": "GET",
    "path": "/page.a.html",
    "response": pageA
  }]
}

fakeServer(model)