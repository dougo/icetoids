import React, { Component } from 'react';

export default class Piece extends Component {
  static def = <polygon id='piece' points='-30,50 0,-50 30,50' stroke='black' cursor='grab' />;

  degrees(direction) {
    return ['up', 'right', 'down', 'left'].indexOf(direction) * 90;
  }

  render() {
    const { x = 0, y = 0, color, direction, move } = this.props;
    const transform = direction && `rotate(${this.degrees(direction)},${x},${y})`;
    return (
      <use href='#piece' x={x} y={y} fill={color} transform={transform} onClick={move} />
    );
  }
}
