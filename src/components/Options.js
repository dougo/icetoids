import React, { Component } from 'react';
import PieceShape from 'components/PieceShape';

export default class Options extends Component {
  render() {
    const { color, point } = this.props;
    return (
      <g transform='scale(0.5)'>
        <g transform='translate(0,-130)'>
          <PieceShape direction='up' color={color} onClick={() => point('up')} />
        </g>
        <g transform='translate(130,0)'>
          <PieceShape direction='right' color={color} onClick={() => point('right')} />
        </g>
        <g transform='translate(0,130)'>
          <PieceShape direction='down' color={color} onClick={() => point('down')} />
        </g>
        <g transform='translate(-130,0)'>
          <PieceShape direction='left' color={color} onClick={() => point('left')} />
        </g>
      </g>
    );
  }
}
