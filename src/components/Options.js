import React, { Component } from 'react';
import PieceShape from 'components/PieceShape';

function translate(option, direction) {
  const distance = direction ? 110 : 130;
  switch (option) {
  case 'up':
    return `translate(0,-${distance})`;
  case 'down':
    return `translate(0,${distance})`;
  case 'left':
    return `translate(-${distance},0)`;
  case 'right':
    return `translate(${distance},0)`;
  }
}

const Option = ({ direction, color, action, option }) => (
  (direction === option || !direction) &&
    <g transform={translate(option, direction)}>
      <PieceShape direction={option} color={color} onClick={() => action(option)} />
    </g>
);

export default class Options extends Component {
  render() {
    const { color, direction, action } = this.props;
    const transform = direction ? undefined : 'scale(0.5)';
    const props = { direction, color, action };
    return (
      <g transform={transform}>
        <Option {...props} option='up' />
        <Option {...props} option='right' />
        <Option {...props} option='down' />
        <Option {...props} option='left' />
      </g>
    );
  }
}
