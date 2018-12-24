import React, { Component } from 'react';

export default class PieceShape extends Component {
  static defs = (
    <defs>
      <polygon id='piece' points='-30,50 0,-50 30,50' stroke='black' cursor='grab' />
      <g id='upright'>
        <rect x={-30} y={-30} width={60} height={60} stroke='black' cursor='grab' />
        <line x1={-30} y1={-30} x2={30} y2={30} stroke='black' />
        <line x1={30} y1={-30} x2={-30} y2={30} stroke='black' />
      </g>
    </defs>
  );

  degrees(direction) {
    return ['up', 'right', 'down', 'left'].indexOf(direction) * 90;
  }

  render() {
    const { color, direction, move } = this.props;
    const transform = direction && `rotate(${this.degrees(direction)})`;
    const href = direction ? '#piece' : '#upright';
    return (
      <use href={href} fill={color} transform={transform} onClick={move} />
    );
  }
}
