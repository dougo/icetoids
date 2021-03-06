import React, { Component } from 'react';
import PieceShape from 'components/PieceShape';
import Options from 'components/Options';

export default class Piece extends Component {
  static defs = PieceShape.defs;

  render() {
    const { x = 0, y = 0, color, direction, isSelected, select, move, point } = this.props;
    const shapeProps = { color, direction, onClick: select };
    const action = direction ? move : point;
    return (
      <g transform={`translate(${x},${y})`}>
        <PieceShape {...shapeProps} />
        {isSelected && <Options color={color} direction={direction} action={action} />}
      </g>
    );
  }
}
