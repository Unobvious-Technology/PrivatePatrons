import * as Koa from "koa";

const app = new Koa();

app.use(async ctx => {
  ctx.body = "Hello Koa!";
});

export default app;
