import React, { Component } from 'react';
import PieceShape from 'components/PieceShape';

export default class Options extends Component {
  render() {
    const { color } = this.props;
    return (
      <g transform='scale(0.5)'>
        <g transform='translate(0,-130)'>
          <PieceShape direction='up' color={color} />
        </g>
        <g transform='translate(130,0)'>
          <PieceShape direction='right' color={color} />
        </g>
        <g transform='translate(0,130)'>
          <PieceShape direction='down' color={color} />
        </g>
        <g transform='translate(-130,0)'>
          <PieceShape direction='left' color={color} />
        </g>
      </g>
    );
  }
}
