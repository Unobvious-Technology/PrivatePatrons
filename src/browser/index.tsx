import * as React from "react";
import { hydrate } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { BrowserRouter } from "react-router-dom";

import App from "../shared/App";

// Fix tslint for window.__INITIAL_DATA__
declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    __APOLLO_STATE__: NormalizedCacheObject;
  }
}

const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link: new HttpLink({ uri: "/graphql" }),
});

const Application = (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

hydrate(Application, document.getElementById("app"));
