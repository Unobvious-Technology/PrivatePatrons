import * as Router from "koa-router";
import * as React from "react";
import { renderToString } from "react-dom/server";
import * as serialize from "serialize-javascript";

import App from "../shared/app";

const renderHandler = async (ctx: Router.IRouterContext) => {
  const name = { name: "test" };
  const markup = renderToString(<App data={name} />);

  ctx.body = `
<!DOCTYPE html>
<html>
<head>
    <title>SSR with RR</title>
    <script src="/public/bundle.js" defer></script>
    <script>window.__INITIAL_DATA__ = ${serialize(name)}</script>
</head>

<body>
    <div id="app">${markup}</div>
</body>
</html>
    `;
};

export default renderHandler;
