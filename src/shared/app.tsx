import * as React from "react";
import * as ReactRouter from "react-router";

interface IAppProps {
  data: any;
}

class App extends React.Component<IAppProps> {
  render() {
    return <div>Hello {this.props.data.name}</div>;
  }
}

export default App;
