import * as Koa from "koa";
import * as Router from "koa-router";
import GraphqlRouter from "./graphql-router";

const app = new Koa();
const router = new Router();

router.use("/graphql", GraphqlRouter.routes(), GraphqlRouter.allowedMethods());

router.get("/", async ctx => {
  ctx.body = "Hello Koa!";
});

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
