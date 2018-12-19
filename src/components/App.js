import React, { Component } from 'react';
import Tile from 'components/Tile';
import Piece from 'components/Piece';

export default class App extends Component {
  render() {
    const tiles = [];
    for (let r = 1; r <= 4; r++) {
      for (let c = 1; c <= 4; c++) {
        tiles.push(<Tile key={`${r}${c}`} row={r} col={c} />);
      }
    }

    return (
      <div>
        <h1>IceToids</h1>
        <svg viewBox='100 100 1050 1050' width='1050'>
          <defs>
            {Tile.def}
            {Piece.def}
          </defs>
          {tiles}
          <g transform='translate(210,0)'>
            <Piece color='red' />
            <Piece x={60} color='red' />
            <Piece x={120} color='red' />
          </g>
          <g transform='translate(1050,210)'>
            <Piece color='green' direction='left' />
          </g>
          <g transform='translate(0,420)'>
            <Piece y={-120} color='blue' direction='right' />
          </g>
        </svg>
      </div>
    );
  }
}
