import React, { Component } from 'react';

export default class Tile extends Component {
  render() {
    const { row = 0, col = 0 } = this.props;
    return (
      <rect x={col*210+10} y={row*210+10} width={200} height={200}
            stroke='skyblue' fill='linen' />
    );
  }
}
