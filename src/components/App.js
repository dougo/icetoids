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
          <defs>
            <polygon id='piece' points='10,100 40,200 70,100' stroke='black' />
          </defs>
          <use href='#piece' x='220' y='10' fill='red' />
          <use href='#piece' x='280' y='10' fill='red' />
          <use href='#piece' x='340' y='10' fill='red' />
        </svg>
      </div>
    );
  }
}
