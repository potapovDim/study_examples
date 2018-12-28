const Koa = require('koa2')
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')
const fs = require('fs')
const path = require('path')
const PORT_OBJ = require('./port_share.json')
const {fetchy_util} = require('./request_util')('http://localhost:8081')

const data_TXT_path = path.resolve(process.cwd(), './temp/data.txt')

const is_exist_TXT_data = () => fs.existsSync(data_TXT_path)


function remove_txt() {
  fs.unlinkSync(data_TXT_path)
  return {txt_data: 'removed'}
}

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

function get_txt() {
  if(is_exist_TXT_data()) {
    return fs.readFileSync(data_TXT_path)
  } else {
    return {txt_data: 'not found'}
  }
}

const servise_2_action_types = {
  ASSERT_CONNECTION: 'ASSERT_CONNECTION',
  ASSERT_CONNECTION_ENVIRONMENT: 'ASSERT_CONNECTION_ENVIRONMENT',
  SAVE_TEXT_DATA: 'SAVE_TEXT_DATA',
  GET_TEXT_DATA: 'GET_TEXT_DATA',
  CLEAR_TEXT_DATA: 'CLEAR_TEXT_DATA',
}

const app = new Koa()
app.use(cors())
app.use(bodyParser())

const request_worker = async (cntx) => {
  const {request: {body: {action, data}}} = cntx
  switch(action) {
    case servise_2_action_types.ASSERT_CONNECTION: {
      cntx.body = {connection: 'ok'}
      return cntx
    }
    case servise_2_action_types.ASSERT_CONNECTION_ENVIRONMENT: {
      const {body} = await fetchy_util.post('/', {action: 'ASSERT_CONNECTION'})
      if(body.connection) {
        cntx.body = {service_connection: 'ok'}
        return cntx
      }
      cntx.body = {service_connection: 'service connection not aviliable'}
      return cntx
    }
    case servise_2_action_types.GET_TEXT_DATA: {
      cntx.body = get_txt()
      return cntx
    }
    case servise_2_action_types.CLEAR_TEXT_DATA: {
      cntx.body = remove_txt()
      return cntx
    }
    case servise_2_action_types.SAVE_TEXT_DATA: {
      cntx.body = save_txt(data)
      return cntx
    }
    default: {
      cntx.body = {ok: 'ok'}
      return cntx
    }
  }

}


app.use(request_worker)

app.listen(PORT_OBJ.PORT)
