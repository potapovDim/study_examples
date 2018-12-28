const {fetchy} = require('../frame/request_interface')('http://localhost:8081')
const {expect} = require('chai')

describe('Simple test execution', () => {
  let token = ''
  const data = [{a: 'c'}]
  it('get token', async () => {
    const body_data = {action: 'AUTORIZATION'}
    const {body, status} = await fetchy.post('/', body_data)
    // console.log(status)
    // console.log(body)
    expect(status).to.eql(200)
    expect(body).haveOwnProperty('token')
    token = body.token
  })
  it('save new data ', async () => {
    const body_data = {action: 'SAVE_JSON_DATA', token, data}
    const {body, status} = await fetchy.post('/', body_data)
    // console.log(status)
    // console.log(body)
    expect(status).to.eql(200)
    expect(body).haveOwnProperty('json_data')
    expect(body.json_data).to.eql('ok')
  })

  it('get json data ', async () => {
    console.log(token)
    const body_data = {action: 'GET_JSON_DATA', token}
    const {body, status} = await fetchy.post('/', body_data)
    // console.log(status)
    // console.log(body)
    expect(status).to.eql(200)
    expect(body).to.eql(data)
  })
  it('clear json data', async () => {
    const body_data = {action: 'CLEAR_JSON_DATA', token}
    const {body, status} = await fetchy.post('/', body_data)
    // console.log(status)
    // console.log(body)
    expect(status).to.eql(200)
    expect(body).haveOwnProperty('json_data')
    expect(body.json_data).to.eql('removed')
  })
})