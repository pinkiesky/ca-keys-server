const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const fs = require('fs');
const KeysStorage = require('./keys');


app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()
  const keys = new KeysStorage('/home/rglr/test_data/')

  router.get('/download/:name/:partStr', async (ctx) => {
    const { name, partStr } = ctx.params;
    const part = Number(partStr);
    if (!name || !name.match(/^[a-z0-9_-\s]+$/i)) {
      ctx.throw(400);
    }

    const key = await keys.getInfoByName(name);
    ctx.body = JSON.stringify(key);
  });

  router.get('*', async ctx => {
    ctx.req.$keys = keys;
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
