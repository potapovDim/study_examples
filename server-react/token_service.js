const Koa = require('koa2')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')

const expired_time = 200 * 1000

let tokens = []

const generate_token = () => {
  const chars = '0987654321qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
  const get_rand = (length) => {
    let rand = ''
    for(let i = 0; i < length; i++) {
      let rand_num = Math.floor(Math.floor(62) * Math.random())
      rand += chars[rand_num]
    }
    return rand
  }

  const token = `${get_rand(4)}-${get_rand(4)}-${get_rand(4)}-${get_rand(4)}`
  const token_data = {
    time: Date.now(),
    token
  }
  tokens.push(token_data)
  return {token}
}

const expire_token = (token) => {
  const required_token_data = tokens.find((token_data) => token_data.token === token)
  if(required_token_data && Date.now() - required_token_data.time < expired_time) {
    return {token: 'ok'}
  } else if(required_token_data) {
    return {token: 'not found'}
  } else {
    const required_token_data_index = tokens.findIndex((token_data) => token_data.token === token)
    tokens.splice(required_token_data_index, 1)
    return {token: 'expired'}
  }
}

const servise_3_action_types = {
  ASSERT_CONNECTION: 'ASSERT_CONNECTION',
  GENERATE_TOKEN: 'GENERATE_TOKEN',
  ASSERT_TOKEN: 'ASSERT_TOKEN'
}

const app = new Koa()
app.use(cors())
app.use(bodyParser())

const request_worker = async (cntx) => {
  const {request: {body: {action, token}}} = cntx
  switch(action) {
    case servise_3_action_types.ASSERT_CONNECTION:
      return cntx.body = {connection: 'ok'}
    case servise_3_action_types.GENERATE_TOKEN: {
      return cntx.body = generate_token()
    }
    case servise_3_action_types.ASSERT_TOKEN: {
      return cntx.body = expire_token(token)
    }
    default:
      return cntx.body = {ok: 'ok'}
  }
}


app.use(request_worker)

app.listen(8082)
