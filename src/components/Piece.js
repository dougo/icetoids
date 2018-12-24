import React, { Component } from 'react';
import PieceShape from 'components/PieceShape';

export default class Piece extends Component {
  static defs = PieceShape.defs;

  render() {
    const { x = 0, y = 0, color, direction, move } = this.props;
    const shapeProps = { color, direction, move };
    return (
      <g transform={`translate(${x},${y})`}>
        <PieceShape {...shapeProps} />
      </g>
    );
  }
}
