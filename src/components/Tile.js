import React, { Component } from 'react';

export default class Tile extends Component {
  static def = <rect id='tile' width={200} height={200} stroke='skyblue' fill='linen' />;

  render() {
    return (
      <use href='#tile' />
    );
  }
}
