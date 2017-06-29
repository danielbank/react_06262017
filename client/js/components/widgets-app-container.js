import { createFragmentContainer, graphql } from 'react-relay';

import { WidgetsApp } from './widgets-app';

export const WidgetsAppContainer = createFragmentContainer(WidgetsApp, {
  viewer: graphql`
    fragment widgetsAppContainer_viewer on Viewer {
      widgets(first: 2147483647) {
        edges {
          node {
            id name description color size quantity
          }
        }
        totalCount
      }
    }
  `,
});