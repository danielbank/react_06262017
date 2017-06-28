import { createFragmentContainer, graphql } from 'react-relay';

import { WidgetsApp } from './widgets-app';

export const WidgetsAppContainer = createFragmentContainer(WidgetsApp, {
  viewer: graphql`
    fragment WidgetsApp_viewer on Viewer {
      ...WidgetTable_viewer
    }
  `,
});