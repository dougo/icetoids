import React, { Component } from 'react';

export default class Piece extends Component {
  static def = <polygon id='piece' points='10,100 40,200 70,100' stroke='black' />;

  degrees(direction) {
    return ['down', 'left', 'up', 'right'].indexOf(direction) * 90;
  }

  render() {
    const { row = 0, col = 0, x = 0, y = 0, color, direction } = this.props;
    const absX = col*210+x;
    const absY = row*210+y;
    const transform = direction && `rotate(${this.degrees(direction)},${absX+100},${absY+100})`;
    return (
      <use href='#piece' x={absX} y={absY} fill={color} transform={transform} />
    );
  }
}
