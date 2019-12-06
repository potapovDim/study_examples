const Router = require('koa-router');
const router = new Router();
const { getFreeUser, setFreeUser, getUsersLits } = require('./data-storage')

router.get('/get-free-user', async (ctx) => {
  ctx.body = getFreeUser()
})

router.post('/set-free-user', async (ctx) => {
  const { username } = ctx.request.body
  setFreeUser(username)

  ctx.body = { data: 'ok' }
})

router.get('/get-users', (ctx) => {
  ctx.body = getUsersLits()
});

module.exports = {
  router
}