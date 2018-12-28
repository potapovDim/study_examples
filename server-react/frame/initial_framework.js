const fetchy_init = require('../frame/request_interface')

class InitialFramework {
  constructor(host) {
    this.fetcy = fetchy_init(host)
    this.req_queue = []
    this.shared_token = null
  }
  authorization(assertionCb = () => {}) {
    this.req_queue.push(async () => {
      const body = {action: 'AUTORIZATION'}
      const resp = await fetchy.post('/', body)
      this.shared_token = resp.body.token
      assertionCb(resp)
    })
    return this
  }

  save_new_json(data, assertionCb = () => {}) {
    this.req_queue.push(async () => {
      const body = {action: 'SAVE_JSON_DATA', token: this.shared_token, data}
      const resp = await fetchy.post('/', body)
      assertionCb(resp)
    })
    return this
  }

  get_json(assertionCb = () => {}) {
    this.req_queue.push(async () => {
      const body = {action: 'GET_JSON_DATA', token: this.shared_token}
      const resp = await fetchy.post('/', body)
      assertionCb(resp)
    })
    return this
  }

  clear_json(assertionCb = () => {}) {
    this.req_queue.push(async () => {
      const body = {action: 'CLEAR_JSON_DATA', token: this.shared_token}
      const resp = await fetchy.post('/', body)
      assertionCb(resp)
    })
    return this
  }

  async execute() {
    for(const task of this.req_queue) {
      console.log('HERE')
      await task.bind(this)
    }
    console.log('HERE')
    this.req_queue = []
  }
}

module.exports = {
  InitialFramework
}
