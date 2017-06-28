import React from 'react';


import { WidgetTable } from './widget-table';

class WidgetsApp extends React.Component {


  render() {
    return <section>
      <header>
        <h1>Widgets App</h1>
      </header>
      <WidgetTable widgets={this.props.viewer.widgets} />
      <footer>
        <small>&copy; 2017, Training 4 Developers, Inc.</small>
      </footer>
    </section>;
  }


}