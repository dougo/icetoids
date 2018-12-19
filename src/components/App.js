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
        <svg viewBox='0 0 1200 1200' width='800'>
          <defs>
            {Tile.def}
            {Piece.def}
          </defs>
          {tiles}
          <Piece col={1} color='red' />
          <Piece col={1} x={60} color='red' />
          <Piece col={1} x={120} color='red' />
          <Piece row={1} col={5} color='green' direction='left' />
          <Piece row={2} col={0} y={-120} color='blue' direction='right' />
        </svg>
      </div>
    );
  }
}
