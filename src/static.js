const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const Router = require('koa-router');
const app = new Koa();
let router = new Router();
app.use(static(path.join(__dirname,'./static'),{
    maxAge:3000000,
    //defer:true
}))
router.get('/', (ctx, next) => {
   ctx.body = 'i am router'
  });
  app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen('3000',()=>{
    console.log('server running at 3000')
})