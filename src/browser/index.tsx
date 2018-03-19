import * as React from "react";
import { hydrate } from "react-dom";
import App from "../shared/App";

// Fix tslint for window.__INITIAL_DATA__
declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    __INITIAL_DATA__: any;
  }
}

hydrate(<App data={window.__INITIAL_DATA__} />, document.getElementById("app"));
