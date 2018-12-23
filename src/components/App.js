import React, { Component } from 'react';
import { combineReducers } from 'redux';
import * as actions from 'actions';
import * as reducers from 'reducers';
import Space from 'components/Space';
import Tile from 'components/Tile';
import Piece from 'components/Piece';

const reducer = combineReducers(reducers);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = reducer();
  }

  move(id, direction) {
    this.setState(reducer(this.state, actions.move(id, direction)));
  }

  makePiece(id, props) {
    const { row, col } = this.state.pieces[id].position;
    return (
      <Space row={row} col={col}>
        <Piece {...props} move={() => this.move(id, props.direction)}/>
      </Space>
    );
  }

  render() {
    const tiles = [];
    for (let r = 1; r <= 4; r++) {
      for (let c = 1; c <= 4; c++) {
        tiles.push(<Space key={`${r}${c}`} row={r} col={c}><Tile /></Space>);
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
          {this.makePiece('red1', { x: -60, y: 50, color: 'red', direction: 'down' })}
          {this.makePiece('red2', { x:   0, y: 50, color: 'red', direction: 'down' })}
          {this.makePiece('red3', { x:  60, y: 50, color: 'red', direction: 'down' })}
          {this.makePiece('green1', { y: -60, x: -50, color: 'green', direction: 'left' })}
          {this.makePiece('green2', { y:   0, x: -50, color: 'green', direction: 'left' })}
          {this.makePiece('green3', { y:  60, x: -50, color: 'green', direction: 'left' })}
          {this.makePiece('blue1', { y: -60, x: 50, color: 'blue', direction: 'right' })}
          {this.makePiece('blue2', { y:   0, x: 50, color: 'blue', direction: 'right' })}
          {this.makePiece('blue3', { y:  60, x: 50, color: 'blue', direction: 'right' })}
          {this.makePiece('yellow1', { x: -60, y: -50, color: 'yellow', direction: 'up' })}
          {this.makePiece('yellow2', { x:   0, y: -50, color: 'yellow', direction: 'up' })}
          {this.makePiece('yellow3', { x:  60, y: -50, color: 'yellow', direction: 'up' })}
        </svg>
      </div>
    );
  }
}
