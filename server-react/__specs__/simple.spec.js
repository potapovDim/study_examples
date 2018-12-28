const {fetchy} = require('../frame/request_interface')('http://localhost:8081')
const {expect} = require('chai')

describe('Simple test execution', () => {
  let token = ''
  const data_json = [{a: 'c'}]
  const data_txt = 'test txt data'

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
    const body_data = {action: 'SAVE_JSON_DATA', token, data: data_json}
    const {body, status} = await fetchy.post('/', body_data)
    // console.log(status)
    // console.log(body)
    expect(status).to.eql(200)
    expect(body).haveOwnProperty('json_data')
    expect(body.json_data).to.eql('ok')
  })
  it('get json data ', async () => {
    const body_data = {action: 'GET_JSON_DATA', token}
    const {body, status} = await fetchy.post('/', body_data)
    // console.log(status)
    // console.log(body)
    expect(status).to.eql(200)
    expect(body).to.eql(data_json)
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
  it('save txt data', async () => {
    const body_data = {action: 'SAVE_TEXT_DATA', token, data: data_txt}
    const {body, status} = await fetchy.post('/', body_data)
    // console.log(status)
    // console.log(body)
    expect(status).to.eql(200)
    expect(body).haveOwnProperty('txt_data')
    expect(body.txt_data).to.eql('ok')
  })
  it('get txt data', async () => {
    const body_data = {action: 'GET_TEXT_DATA', token}
    const {body, status} = await fetchy.post('/', body_data)
    // console.log(status)
    // console.log(body)
    expect(status).to.eql(200)
    expect(body).to.eql(data_txt)
  })
  it('clear txt data', async () => {
    const body_data = {action: 'CLEAR_TEXT_DATA', token}
    const {body, status} = await fetchy.post('/', body_data)
    // console.log(status)
    // console.log(body)
    expect(status).to.eql(200)
    expect(body).haveOwnProperty('txt_data')
    expect(body.txt_data).to.eql('removed')
  })
})