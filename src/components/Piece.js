import React, { Component } from 'react';
import PieceShape from 'components/PieceShape';

export default class Piece extends Component {
  static defs = PieceShape.defs;

  render() {
    const { x = 0, y = 0, color, direction, isSelected, select, move } = this.props;
    const shapeProps = { color, direction, onClick: direction ? move : select };
    return (
      <g transform={`translate(${x},${y})`}>
        <PieceShape {...shapeProps} />
        {isSelected &&
         <g>
           <PieceShape direction='up' />
           <PieceShape direction='up' />
           <PieceShape direction='up' />
           <PieceShape direction='up' />
         </g>
        }
      </g>
    );
  }
}
