import { makeExecutableSchema } from "graphql-tools";

import { GraphQLContext } from "./graphql-context-type";
import * as schema from "./schema.graphql";

const allTypeDefs = [schema];
const allResolvers = {
  Query: {
    healthz: (parent: any, args: any, context: GraphQLContext) => "ok"
  }
};

export const executableSchema = makeExecutableSchema({
  resolvers: allResolvers,
  typeDefs: allTypeDefs
});
