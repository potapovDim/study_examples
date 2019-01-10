const fakeServer = require('test-fake-server')
const fetch = require('node-fetch')
const {expect} = require('chai')

describe('Example', () => {

  let server = null

  before(async () => {
    const data = require('../../data/test.json')
    server = fakeServer(data)

    await (() => new Promise((res) => {
      setTimeout(res, 1500)
    }))()
  })
  after(() => {
    server.close()
  })
  it('test', async () => {
    const responseBody = await fetch('http://localhost:8888/user').then((res) => res.json())
    expect(responseBody.user_response_success).to.eql('user_response_success')
  })
})
