const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const { router } = require('./lib/router')

app.use(bodyParser())
app.use(router.routes())

app.listen(8080);