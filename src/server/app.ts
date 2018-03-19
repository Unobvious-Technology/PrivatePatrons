import * as path from "path";

import * as Koa from "koa";
import * as Router from "koa-router";
import * as send from "koa-send";

import GraphqlRouter from "./graphql-router";
import renderHandler from "./render-handler";

const app = new Koa();
const router = new Router();

// Note: We want "build/public" or "public", relative to the built "server.js" file,
// not a path relative to the source, which is what webpack gives for __dirname
const publicPath = path.join(
  path.dirname(process.mainModule.filename),
  "public"
);

// Static file handling:
//    Implemented this was as koa-static doesn't play nicely with webpack / dist
router.get("/public/:file+", async ctx => {
  await send(ctx, ctx.params.file, { root: publicPath });
});

// GraphQL handling:
router.use("/graphql", GraphqlRouter.routes(), GraphqlRouter.allowedMethods());

// Render the application:
router.get("/*", renderHandler);

// Trust proxy header fields, allowing use of Cookies with secure flag
app.proxy = true;

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
