import React from 'react';

export class BaseComponent extends React.Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

}