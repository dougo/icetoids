import React, { Component } from 'react';
import Space from 'components/Space';
import Tile from 'components/Tile';
import Piece from 'components/Piece';

export default class App extends Component {
  render() {
    const tiles = [];
    for (let r = 1; r <= 4; r++) {
      for (let c = 1; c <= 4; c++) {
        tiles.push(<Space key={`${r}${c}`} row={r} col={c}><Tile /></Space>);
      }
    }

    const row = this.state && this.state.moved ? 1 : 0;

    return (
      <div>
        <h1>IceToids</h1>
        <svg viewBox='100 100 1050 1050' width='1050'>
          <defs>
            {Tile.def}
            {Piece.def}
          </defs>
          {tiles}
          <Space row={row} col={1}>
            <Piece x={-60} y={50} color='red' direction='down'
                   move={() => this.setState({ moved: true })} />}
          </Space>
          <Space col={1}>
            <Piece x={0} y={50} color='red' direction='down' />
            <Piece x={60} y={50} color='red' direction='down' />
          </Space>
          <Space row={1} col={5}>
            <Piece x={-50} y={-60} color='green' direction='left' />
            <Piece x={-50} y={0} color='green' direction='left' />
            <Piece x={-50} y={60} color='green' direction='left' />
          </Space>
          <Space row={2}>
            <Piece x={50} y={-60} color='blue' direction='right' />
            <Piece x={50} y={0} color='blue' direction='right' />
            <Piece x={50} y={60} color='blue' direction='right' />
          </Space>
          <Space row={5} col={3}>
            <Piece x={-60} y={-50} color='yellow' direction='up' />
            <Piece x={0} y={-50} color='yellow' direction='up' />
            <Piece x={60} y={-50} color='yellow' direction='up' />
          </Space>
        </svg>
      </div>
    );
  }
}
