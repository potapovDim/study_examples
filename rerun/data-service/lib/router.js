const Router = require('koa-router');
const { getFreeUser, setFreeUser, getFullUsersList } = require('./user.storage')

const router = new Router();

router.get('/get-free-user', async (ctx) => {
  ctx.body = getFreeUser()
})

router.post('/set-free-user', async (ctx) => {
  const { username } = ctx.request.body
  setFreeUser(username)
  ctx.body = { data: 'OK' }
})

router.get('/get-users', async (ctx) => {
  ctx.body = getFullUsersList()
})

router.get('/', async (ctx) => {
  ctx.body = 'hello from Koa'
})

module.exports = {
  router
}