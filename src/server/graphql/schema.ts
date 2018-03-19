import { makeExecutableSchema } from "graphql-tools";

import { GraphQLContext } from "./graphql-context-type";
import * as schema from "./schema.graphql";

const allTypeDefs = [schema];
const allResolvers = {
  Query: {
    healthz: (parent: any, args: any, context: GraphQLContext) => String(Date.now()),
  },
};

export const executableSchema = makeExecutableSchema({
  resolvers: allResolvers,
  typeDefs: allTypeDefs,
});
