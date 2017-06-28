import { createFragmentContainer, graphql } from 'react-relay';

import WidgetTable from './widget-table.component';

export const WidgetTableContainer = createFragmentContainer(WidgetTable, {

  viewer: graphql`
    fragment WidgetTable_viewer on Viewer {
      widgets(first: 2147483647) @connection(key: "WidgetTable_widgets") {
        edges {
          node {
            name description color size quantity
          }
        }
      }
    }
   `,

});
