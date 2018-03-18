// This enables the usage of `import * as schema from "./schema.graphql";` lines without typescript warnings
declare module "*.graphql" {
  import { DocumentNode } from "graphql";

  const value: DocumentNode;
  export = value;
}
