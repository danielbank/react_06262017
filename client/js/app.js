import 'bootstrap-loader';
import '../scss/styles.scss';

import { React } from 'react';
import { ReactDOM } from 'react-dom';
import { QueryRenderer, graphql } from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery = (operation, variables) => {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(res => res.json());
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

ReactDOM.render(
  <QueryRenderer
    environment={environment}
    query={graphql`
      query appQuery {
        viewer {
          ...WidgetsApp_viewer
        }
      }
    `}
    variables={{}}
    render={({ props }) => {
      if (props) {
        return <WidgetsApp viewer={props.viewer} />;
      } else {
        return <div>Loading...</div>;
      }
    }}
  />,
  document.querySelector('main'),
);