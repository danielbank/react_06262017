/**
 * @flow
 * @relayHash 3066c73503afa3baa705b4e6bc275008
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type appQueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query appQuery {
  viewer {
    ...widgetsAppContainer_viewer
    id
  }
}

fragment widgetsAppContainer_viewer on Viewer {
  widgets(first: 2147483647) {
    edges {
      node {
        id
        name
        description
        color
        size
        quantity
      }
    }
    totalCount
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "appQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "widgetsAppContainer_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "appQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "appQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 2147483647,
                "type": "Int"
              }
            ],
            "concreteType": "WidgetConnection",
            "name": "widgets",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "WidgetEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Widget",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "description",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "color",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "size",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "quantity",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "totalCount",
                "storageKey": null
              }
            ],
            "storageKey": "widgets{\"first\":2147483647}"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query appQuery {\n  viewer {\n    ...widgetsAppContainer_viewer\n    id\n  }\n}\n\nfragment widgetsAppContainer_viewer on Viewer {\n  widgets(first: 2147483647) {\n    edges {\n      node {\n        id\n        name\n        description\n        color\n        size\n        quantity\n      }\n    }\n    totalCount\n  }\n}\n"
};

module.exports = batch;
