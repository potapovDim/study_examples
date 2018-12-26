const Koa = require('koa2')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const fs = require('fs')
const path = require('path')

function save_JSON_data(data) {
  const data_JSON_path = './temp/data.json'
  const is_presend_JSON_holder = fs.existsSync(path.resolve(process.cwd(), data_JSON_path))
  if(is_presend_JSON_holder) {
    const existing_JSON_data = JSON.parse(require(data_JSON_path))
    if(Array.isArray(existing_JSON_data)) {
      existing_JSON_data.push(data)
      fs.unlink(data_JSON_path)
      fs.writeFileSync(data_JSON_path, JSON.stringify(existing_JSON_data))
    }
  }
}

// if data cant be converted to JSON will return error
function dataToJSON(data) {
  try {
    save_JSON_data(data)
    return {ok: 'ok'}
  }
  catch(e) {
    return {not_ok: 'data cant be converted in JSON format'}
  }
}

// service works with JSON format files


const {fetchy_util} = require('./request_util')('http://localhost:8080')

const servise_1_action_types = {
  ASSERT_CONNECTION: 'ASSERT_CONNECTION',
  ASSERT_CONNECTION_ENVIRONMENT: 'ASSERT_CONNECTION_ENVIRONMENT',
  SAVE_JSON_DATA: 'SAVE_JSON_DATA'
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

app.listen(8081)
