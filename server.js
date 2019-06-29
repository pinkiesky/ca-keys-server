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
  const keys = new KeysStorage(__dirname + '/tests/assets')
  let currentServing = null;

  router.get('/s/:partStr', async (ctx) => {
    const { partStr } = ctx.params;
    const index = Number(partStr);

    const part = await keys.loadPart(currentServing, index);

    ctx.response.set('Content-Disposition', `filename="${part.name}"`);
    ctx.body = part.data;
  });

  router.get('/download/:name/:partStr', async (ctx) => {
    const { name, partStr } = ctx.params;
    const index = Number(partStr);
    if (!name || !name.match(/^[a-z0-9_-\s]+$/i)) {
      ctx.throw(400);
    }

    const part = await keys.loadPart(name, index);

    ctx.response.set('Content-Disposition', `filename="${part.name}"`);
    ctx.body = part.data;
  });

  router.get('/api/getKeyByName', async (ctx) => {
    const name = ctx.query.name;
    if (!name || !name.length) {
      ctx.throw(400);
    }

    const key = await keys.getKeyByName(name);
    ctx.body = JSON.stringify(key);
  });

  router.get('/api/getParts', async (ctx) => {
    const name = ctx.query.name;
    if (!name || !name.length) {
      ctx.throw(400);
    }

    const key = await keys.getParts(name);
    ctx.body = JSON.stringify(key);
  });

  router.get('/api/getKeyList', async (ctx) => {
    const key = await keys.getKeyList();
    ctx.body = JSON.stringify(key);
  });

  router.get('/api/serve', async (ctx) => {
    const name = ctx.query.name;
    if (!name || !name.length) {
      ctx.throw(400);
    }

    currentServing = name;
    console.log('set serving', currentServing);
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
