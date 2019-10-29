const nodeFetchy = require('./')

const request = nodeFetchy('http://localhost:8888/')

async function test() {
  const result = await request.get('/user')
  // {"user_name":"test user"}
  // { user_name: 'test user' }
  console.log(result)
}


test()