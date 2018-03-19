import * as Router from "koa-router";
import * as React from "react";
import { renderToString } from "react-dom/server";

import App from "../shared/app";

const renderHandler = async (ctx: Router.IRouterContext) => {
  const markup = renderToString(<App />);

  ctx.body = `
<!DOCTYPE html>
<html>
<head>
    <title>SSR with RR</title>
    <script src="/public/bundle.js" defer></script>
</head>

<body>
    <div id="app">${markup}</div>
</body>
</html>
    `;
};

export default renderHandler;
