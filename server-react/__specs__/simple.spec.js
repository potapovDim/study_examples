const {fetchy} = require('../frame/request_interface')('http://localhost:8081')
const {expect} = require('chai')

describe('Simple test execution', () => {
  let token = ''
  it('get token', async () => {
    const body_data = {action: 'AUTORIZATION'}
    const {body, status} = await fetchy.post('/', body_data)
    // console.log(status)
    // console.log(body)
    expect(status).to.eql(200)
    expect(body).haveOwnProperty('token')
  })
  it('save new data ', async () => {
    const body_data = {action: 'SAVE_JSON_DATA', token, data: [{a: 'c'}]}
    const {body, status} = await fetchy.post('/', body_data)
    console.log(status)
    console.log(body)
    expect(status).to.eql(200)
    expect(body).haveOwnProperty('json_data')
    expect(body.json_data).to.eql('ok')
  })
})