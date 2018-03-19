import ApolloClient from "apollo-client";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SchemaLink } from "apollo-link-schema";
import { StaticRouter } from "react-router";
import * as Router from "koa-router";
import * as React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import * as serialize from "serialize-javascript";

import App from "../shared/app";
import { executableSchema as schema } from "./graphql/schema";

const renderHandler = async (ctx: Router.IRouterContext) => {
  const client = new ApolloClient({
    ssrMode: true,
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema }),
  });

  const context = {};

  // The client-side App will instead use <BrowserRouter>
  const Application = (
    <ApolloProvider client={client}>
      <StaticRouter location={ctx.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );

  await getDataFromTree(Application);

  // We are ready to render for real
  const content = renderToString(Application);
  const initialState = client.extract();

  const html = <Html content={content} state={initialState} />;

  ctx.body = `<!doctype html>\n${renderToStaticMarkup(html)}`;
};

const Html = ({ content, state }) => {
  return (
    <html>
      <head>
        <title>SSR with RR</title>
        <script src="/public/bundle.js" defer />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${serialize(state)};`,
          }}
        />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
      </body>
    </html>
  );
};

export default renderHandler;
