const Koa = require('koa2')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const fs = require('fs')
const path = require('path')
const PORT_OBJ = require('./port_share.json')
const {fetchy_util} = require('./request_util')('http://localhost:8081')

const data_TXT_path = path.resolve(process.cwd(), './temp/data.txt')

const is_exist_TXT_data = () => fs.existsSync(data_TXT_path)

function save_txt(data) {
  const save = (data_txt) => {
    fs.writeFileSync(data_TXT_path, data_txt)
    return {txt_data: 'ok'}
  }
  if(is_exist_TXT_data()) {
    let existiongData = fs.readFileSync(data_TXT_path)
    existiongData += data
    fs.unlinkSync(data_TXT_path)
    return save(existiongData)
  } else {
    return save(data)
  }
}

const servise_2_action_types = {
  ASSERT_CONNECTION: 'ASSERT_CONNECTION',
  ASSERT_CONNECTION_ENVIRONMENT: 'ASSERT_CONNECTION_ENVIRONMENT',
  SAVE_TEXT_DATA: 'SAVE_TEXT_DATA',
  CLEAR_TEXT_DATA: 'CLEAR_JSON_DATA',
  GET_TEXT_DATA: 'GET_JSON_DATA',
}

const app = new Koa()
app.use(cors())
app.use(bodyParser())

const request_worker = async (cntx) => {
  console.log('!!!!!!!!!!!!!!', 'aaaaaaaaaaaa')
  const {request: {body: {action, data}}} = cntx
  console.log(action, '!!!!!!!!!!!!!!', 'aaaaaaaaaaaa')
  switch(action) {
    case servise_2_action_types.ASSERT_CONNECTION:
      return cntx.body = {connection: 'ok'}

    case servise_2_action_types.ASSERT_CONNECTION_ENVIRONMENT: {
      const {body} = await fetchy_util.post('/', {action: 'ASSERT_CONNECTION'})
      if(body.connection) {
        return cntx.body = {service_connection: 'ok'}
      }
      return cntx.body = {service_connection: 'service connection not aviliable'}
    }
    case servise_2_action_types.SAVE_TEXT_DATA: {
      console.log('___________________________________')
      cntx.body = save_txt(data)
      return cntx
    }
    default:
      return cntx.body = {ok: 'ok'}
  }
}


app.use(request_worker)

app.listen(PORT_OBJ.PORT)
