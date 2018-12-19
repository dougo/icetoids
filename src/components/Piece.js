import React, { Component } from 'react';

export default class Piece extends Component {
  static def = <polygon id='piece' points='10,100 40,200 70,100' stroke='black' />;

  degrees(direction) {
    return ['down', 'left', 'up', 'right'].indexOf(direction) * 90;
  }

  render() {
    const { x = 0, y = 0, color, direction } = this.props;
    const transform = direction && `rotate(${this.degrees(direction)},${x+100},${y+100})`;
    return (
      <use href='#piece' x={x} y={y} fill={color} transform={transform} />
    );
  }
}
