const Koa = require('koa2')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const PORT_OBJ = require('./port_share.json')
const {fetchy_util} = require('./request_util')('http://localhost:8081')

const servise_1_action_types = {
  ASSERT_CONNECTION: 'ASSERT_CONNECTION',
  ASSERT_CONNECTION_ENVIRONMENT: 'ASSERT_CONNECTION_ENVIRONMENT'
}

const app = new Koa()
app.use(cors())
app.use(bodyParser())

const request_worker = async (cntx) => {
  const {request: {body: {action}}} = cntx
  switch(action) {
    case servise_1_action_types.ASSERT_CONNECTION:
      return cntx.body = {connection: 'ok'}

    case servise_1_action_types.ASSERT_CONNECTION_ENVIRONMENT: {
      const {body} = await fetchy_util.post('/', {action: 'ASSERT_CONNECTION'})
      if(body.connection) {
        return cntx.body = {service_connection: 'ok'}
      }
      return cntx.body = {service_connection: 'service connection not aviliable'}
    }
    default:
      return cntx.body = {ok: 'ok'}
  }
}


app.use(request_worker)

app.listen(PORT_OBJ.PORT)
