koa-static源码分析
 ===
koa-static作为koa静态文件读取的一个中间件，在koa程序中可以发挥非常重要的作用.
- 首先可以看看koa-static在koa中是怎么使用的

```
const Koa = require('koa');
const static = require('koa-static');
const path = require('path');

const app = new Koa();

app.use(static(path.join(__dirname,'./static'),{

}))
app.listen('3000',()=>{
    console.log('server running at 3000')
})
```
这样我们就能加载static目录下面的静态资源,同时我们还可以加入一些其他的参数，比如我们需要缓存

```
koa-send提供了很多便民的选项，除去常用的root以外，还有大概小十个的选项可供使用：

maxage 设置浏览器可以缓存的毫秒数
对应的Header: Cache-Control: max-age=XXX
immutable	Boolean	false	通知浏览器该URL对应的资源不可变，可以无限期的缓存
对应的Header: Cache-Control: max-age=XXX, immutable
hidden	Boolean	false	是否支持隐藏文件的读取
.开头的文件被称为隐藏文件
root 设置静态文件路径的根目录，任何该目录之外的文件都是禁止访问的。
index 设置一个默认的文件名，在访问目录的时候生效，会自动拼接到路径后边 (此处有一个小彩蛋)
gzip 如果访问接口的客户端支持gzip，并且存在.gz后缀的同名文件的情况下会传递.gz文件
brotli 逻辑同上，如果支持brotli且存在.br后缀的同名文件
format 开启以后不会强要求路径结尾的/，/path和/path/表示的是一个路径 (仅在path是一个目录的情况下生效)
extensions 如果传递了一个数组，会尝试将数组中的所有item作为文件的后缀进行匹配，匹配到哪个就读取哪个文件
setHeaders 用来手动指定一些Headers，意义不大

```

```
opts = Object.assign({}, opts)

  assert(root, 'root directory is required to serve files')

  // options
  debug('static "%s" %j', root, opts)
  opts.root = resolve(root)
  if (opts.index !== false) opts.index = opts.index || 'index.html'
```
断言路径是否传入,打印出root和其他参数,然后判断有传入index,如果没有的话，默认的index是index.html

接下来去判断opts,也就是第二个参数是否传入defer

```
if (!opts.defer) {
    return async function serve (ctx, next) {
      let done = false

      if (ctx.method === 'HEAD' || ctx.method === 'GET') {
        try {
          done = await send(ctx, ctx.path, opts)
        } catch (err) {
          if (err.status !== 404) {
            throw err
          }
        }
      }

      if (!done) {
        await next()
      }
    }
  }
```



如果传入defer的话，就会先去匹配后面的路由，如果没有匹配到，则会匹配当前的这个路由
举个例子，如果localhost:3000,有2个路由都能匹配，一个是index.html，一个是api，在有defer的情况下，优先匹配api,打印 i am router，反之则先匹配index.html这个静态文件。
也就是先执行await next（）,然后才会执行加载静态资源的操作
注意koa-static只支持head和get方法
```
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
```


其中koa-static最主要的还是借助koa-send这个中间件来完成文件的读取操作,首先做一些入参的校验和初始化的赋值过程

```
async function send (ctx, path, opts = {}) {
  assert(ctx, 'koa context required')
  assert(path, 'pathname required')

  // options
  debug('send "%s" %j', path, opts)
  const root = opts.root ? normalize(resolve(opts.root)) : ''
  const trailingSlash = path[path.length - 1] === '/'
  path = path.substr(parse(path).root.length)
  const index = opts.index
  const maxage = opts.maxage || opts.maxAge || 0
  const immutable = opts.immutable || false
  const hidden = opts.hidden || false
  const format = opts.format !== false
  const extensions = Array.isArray(opts.extensions) ? opts.extensions : false
  const brotli = opts.brotli !== false
  const gzip = opts.gzip !== false
  const setHeaders = opts.setHeaders

```

setHeaders是一个设置请求头的函数,path进行解码，如果path不存在，就返回400,
```
if (setHeaders && typeof setHeaders !== 'function') {
    throw new TypeError('option setHeaders must be function')
  }

  // normalize path
  path = decode(path)

  if (path === -1) return ctx.throw(400, 'failed to decode')

  // index file support
  if (index && trailingSlash) path += index

  path = resolvePath(root, path)

  // hidden file support, ignore
  if (!hidden && isHidden(root, path)) return

  let encodingExt = ''
```
这里就用到了上边的几个逻辑处理，首先是trailingSlash的判断，如果以/结尾会拼接index，以及如果当前path匹配为是一个目录以后，又会拼接一次index。
所以一个简单的/加上index的参数就可以直接获取到/index/index。
一个小小的彩蛋，实际开发中应该很少会这么玩

最终的读取文件操作
最后终于来到了文件读取的逻辑处理，首先就是调用setHeaders的操作。

因为经过上边的层层筛选，这里拿到的path和你调用send时传入的path不是同一个路径。
不过倒也没有必要必须在setHeaders函数中进行处理，因为可以看到在函数结束时，将实际的path返回了出来。
我们完全可以在send执行完毕后再进行设置，至于官方readme中所写的and doing it after is too late because the headers are already sent.。
这个不需要担心，因为koa的返回数据都是放到ctx.body中的，而body的解析是在所有的中间件全部执行完以后才会进行处理。
也就是说所有的中间件都执行完以后才会开始发送http请求体，在此之前设置Header都是有效的。
添加一个defer选项来决定是否先执行其他中间件。
如果defer为false，则会先执行send，优先匹配静态文件。
否则则会等到其余中间件先执行，确定其他中间件没有处理该请求才会去寻找对应的静态资源。
只需指定root，剩下的工作交给koa-static，我们就无需关心静态资源应该如何处理了。








