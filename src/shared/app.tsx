import * as React from "react";
import * as ReactRouter from "react-router";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const GET_HEALTH = gql`
  query {
    healthz
  }
`;

// interface IAppProps {
//   loading: boolean;
//   error: boolean;
//   data: {
//     healthz: string;
//   };
// }

const App = ({ loading, error, data }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return <div>Hello {data.healthz}</div>;
};

export default graphql(GET_HEALTH)(App);
