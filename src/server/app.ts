import * as Koa from "koa";
import * as Router from "koa-router";
import GraphqlRouter from "./graphql-router";

const app = new Koa();
const router = new Router();

router.use("/graphql", GraphqlRouter.routes(), GraphqlRouter.allowedMethods());

router.get("/", async ctx => {
  ctx.body = "Hello Koa!";
});

// Trust proxy header fields, allowing use of Cookies with secure flag
app.proxy = true;

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
