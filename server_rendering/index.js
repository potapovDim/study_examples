const testFakeServer = require('test-fake-server')
const path = require('path')

const mod = {
  port: 9090,
  debug: true,
  api: [{
    method: 'GET',
    path: '/',
    response: path.join(__dirname, './templates_html/index.html')
  }, {
    method: 'POST',
    path: '/login',
    response: path.join(__dirname, './templates_html/list.html')
  },
  {
    method: 'GET',
    path: '/src',
    response: path.join(__dirname, './templates_html/src.js')
  }]
}

testFakeServer(mod)