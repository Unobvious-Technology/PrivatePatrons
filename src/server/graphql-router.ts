import { graphqlKoa } from "apollo-server-koa";
import * as BodyParser from "koa-bodyparser";
import * as Router from "koa-router";

import { GraphQLContext } from "./graphql/graphql-context-type";
import { executableSchema } from "./graphql/schema";

const router = new Router();
const handler = graphqlKoa(async ctx => {
  const context: GraphQLContext = {};

  return {
    context,
    schema: executableSchema
  };
});

router.use(BodyParser());
router.get("/", handler);
router.post("/", handler);

export default router;
