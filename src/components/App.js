import React, { Component } from 'react';
import Space from 'components/Space';
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
          <Space col={1}>
            <Piece color='red' />
            <Piece x={60} color='red' />
            <Piece x={120} color='red' />
          </Space>
          <Space row={1} col={5}>
            <Piece color='green' direction='left' />
          </Space>
          <Space row={2}>
            <Piece y={-120} color='blue' direction='right' />
          </Space>
        </svg>
      </div>
    );
  }
}
