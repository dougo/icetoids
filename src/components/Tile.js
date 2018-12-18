import React, { Component } from 'react';

export default class Tile extends Component {
  static def = <rect id='tile' width={200} height={200} stroke='skyblue' fill='linen' />;

  render() {
    const { row = 0, col = 0 } = this.props;
    return (
      <use href='#tile' x={col*210+10} y={row*210+10} />
    );
  }
}
