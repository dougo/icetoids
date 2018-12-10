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
          {tiles}
          <defs>
            <polygon id='piece' points='10,100 40,200 70,100' stroke='black' />
          </defs>
          <Piece col={1} />
          <Piece col={1} x={60} />
          <Piece col={1} x={120} />
        </svg>
      </div>
    );
  }
}
