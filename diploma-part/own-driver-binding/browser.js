const requestInterface = require('./request_interface')
const {spawn} = require('child_process')
const path = require('path')

const defaultCapabilities = {
  desiredCapabilities: {
    javascriptEnabled: true,
    acceptSslCerts: true,
    platform: 'ANY',
    browserName: 'chrome'
  }
}

class Browser {

  constructor(config = {}) {
    const {timeout = 5000, slowTime = 0, driverUrl = 'http://localhost:4444', capabilities = defaultCapabilities} = config
    this.driverProc = null
    this.request = requestInterface(timeout, slowTime, driverUrl)
    this.capabilities = capabilities
    this.sessionId = null
  }

  async startDriver() {
    return new Promise(res => {
      const proc = spawn(`${path.resolve(__dirname, './chromedriver')}`, ['--port=4444'], {detached: true})
      proc.stdout.on('data', (data) => {
        if(data.includes('Only local connections are allowed.')) {
          console.log('AAAAA')
          proc.unref()
          this.driverProc = proc
          res('Успішно запушений процес')
        }
      })
    })
  }

  async getSession() {
    const {body: {sessionId}} = await this.request.post('/session', this.capabilities)
    this.sessionId = sessionId
  }

  stopDriver() {
    console.log('stop driver')
    if(this.driverProc) {
      this.driverProc.ref()
      this.driverProc.kill()
    }
  }

  async closeSession() {
    const {body} = await this.request.del(`/session/${this.sessionId}`)
    console.log(body)
  }
}

async function Test() {
  const browser = new Browser()
  await browser.startDriver().then(console.log)
  await browser.getSession()
  await browser.closeSession()
  await browser.stopDriver()
}

Test()