import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import * as actions from 'actions';
import Space from 'components/Space';
import Tile from 'components/Tile';
import Piece from 'components/Piece';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  makePiece(id, props) {
    if (!this.props.pieces[id]) return;
    const { position: { row, col }, direction } = this.props.pieces[id];
    const isSelected = this.state.selected === id;
    return (
      <Space row={row} col={col}>
        <Piece {...props} isSelected={isSelected} direction={direction}
               select={e => { e.stopPropagation(); this.setState({ selected: id }); }}
               point={direction => this.props.point(id, direction)}
               move={() => this.props.move(id, direction)} />
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
      <div onClick={() => this.setState({ selected: undefined })}>
        <h1>IceToids</h1>
        <svg viewBox='100 100 1050 1050' width='1050'>
          <defs>
            {Tile.def}
            {Piece.defs}
          </defs>
          {tiles}
          {this.makePiece('red1', { x: -60, y: 50, color: 'red' })}
          {this.makePiece('red2', { x:   0, y: 50, color: 'red' })}
          {this.makePiece('red3', { x:  60, y: 50, color: 'red' })}
          {this.makePiece('green1', { y: -60, x: -50, color: 'green' })}
          {this.makePiece('green2', { y:   0, x: -50, color: 'green' })}
          {this.makePiece('green3', { y:  60, x: -50, color: 'green' })}
          {this.makePiece('blue1', { y: -60, x: 50, color: 'blue' })}
          {this.makePiece('blue2', { y:   0, x: 50, color: 'blue' })}
          {this.makePiece('blue3', { y:  60, x: 50, color: 'blue' })}
          {this.makePiece('yellow1', { x: -60, y: -50, color: 'yellow' })}
          {this.makePiece('yellow2', { x:   0, y: -50, color: 'yellow' })}
          {this.makePiece('yellow3', { x:  60, y: -50, color: 'yellow' })}
        </svg>
      </div>
    );
  }
}

export default hot(connect(state => state, actions)(App));
