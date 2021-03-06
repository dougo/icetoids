import React, { Component } from 'react';

export default class Space extends Component {
  render() {
    const { row = 0, col = 0, children } = this.props;
    return <g transform={`translate(${col*210+100},${row*210+100})`} children={children} />;
  }
}
