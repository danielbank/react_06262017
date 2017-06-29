import React from 'react';

import { WidgetTable } from './widget-table';
import { connectionEdgesToArray } from '../utils';

export class WidgetsApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <section>
      <header>
        <h1>Widgets App</h1>
      </header>
      <WidgetTable widgets={connectionEdgesToArray(this.props.viewer.widgets)} />
      <div>
        Widget Count: {this.props.viewer.widgets.totalCount}
      </div>
      <footer>
        <small>&copy; 2017, Training 4 Developers, Inc.</small>
      </footer>
    </section>;
  }

}