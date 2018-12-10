import React, { Component } from 'react';

export default class Piece extends Component {
  render() {
    const { row = 0, col = 0, x = 0, y = 0 } = this.props;
    return (
      <use href='#piece' x={col*210+10+x} y={row*210+10+y} fill='red' />
    );
  }
}
