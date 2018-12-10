import React, { Component } from 'react';
import Tile from 'components/Tile';

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
        </svg>
      </div>
    );
  }
}
