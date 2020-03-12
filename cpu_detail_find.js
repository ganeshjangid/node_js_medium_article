const cluster=require('cluster');
const {cpus}=require('os');
//console.log(cpus().length);

const isMaster=cluster.isMaster;
const numWorker=cpus().length;
//console.log(isMaster);


if(isMaster){
    console.log(`Forking ${numWorkers} workers`);
    const workers = [...Array(numWorkers)].map(_ => cluster.fork());
    cluster.on('online', (worker) => log(`Worker ${worker.process.pid} is online`));
    cluster.on('exit', (worker, exitCode) => {
        console.log(`Worker ${worker.process.id} exited with code ${exitCode}`)
        console.log(`Starting a new worker`)
        cluster.fork()
      })
}else{
    const Koa    = require('koa')
    const Router = require('koa-router')
    const runJob = require('./modules/job')
    const router = new Router()
    const app    = new Koa()
  
    router.get('/', async ctx => ctx.body = `PID ${process.pid} listening here!`)
          .post('/flip', async ctx => {
            const res = await runJob()
            ctx.body  = res
          })
  
    app.use(async (ctx, next) => {
          await next();
          const rt = ctx.response.get('X-Response-Time');
          log(`${ctx.method} ${ctx.url} - ${rt}`);
        })
        .use(async (ctx, next) => {
          const start = Date.now();
          await next();
          const ms = Date.now() - start;
          ctx.set('X-Response-Time', `${ms}ms`);
        })
        .use(router.routes())
        .listen(3000)
}
