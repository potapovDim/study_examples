const {InitialFramework} = require('../frame/initial_framework')
const {expect} = require('chai')

describe('Simple test execution', () => {
  const frame = new InitialFramework('http://localhost:8081')
  it('CRUD', async () => {
    const data = [{a: 'c'}]
    const assert_authorization = ({status, body}) => {
      expect(status).to.eql(200)
      expect(body).haveOwnProperty('token')
    }
    const assert_save_json = ({status, body}) => {
      expect(status).to.eql(200)
      expect(body).haveOwnProperty('json_data')
      expect(body.json_data).to.eql('ok')
    }
    const assert_get_json = ({status, body}) => {
      expect(status).to.eql(200)
      expect(body).to.eql(data)
    }
    const assert_remove = ({status, body}) => {
      expect(status).to.eql(200)
      expect(body).haveOwnProperty('json_data')
      expect(body.json_data).to.eql('removed')
    }

    await frame
      .authorization(assert_authorization)
      .save_new_json(data, assert_save_json)
      .get_json(assert_get_json)
      .clear_json(assert_remove)
      .execute()
  })
})
