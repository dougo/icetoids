import { MOVE } from 'actions/types';

const initialState = {
  red1: { position: { row: 0, col: 1 }, direction: 'down' },
  red2: { position: { row: 0, col: 1 }, direction: 'down' },
  red3: { position: { row: 0, col: 1 }, direction: 'down' },
  green1: { position: { row: 1, col: 5 }, direction: 'left' },
  green2: { position: { row: 1, col: 5 }, direction: 'left' },
  green3: { position: { row: 1, col: 5 }, direction: 'left' },
  blue1: { position: { row: 2, col: 0 }, direction: 'right' },
  blue2: { position: { row: 2, col: 0 }, direction: 'right' },
  blue3: { position: { row: 2, col: 0 }, direction: 'right' },
  yellow1: { position: { row: 5, col: 3 }, direction: 'up' },
  yellow2: { position: { row: 5, col: 3 }, direction: 'up' },
  yellow3: { position: { row: 5, col: 3 }, direction: 'up' }
};

function nextPosition({ row, col }, direction) {
  switch (direction) {
  case 'down':
    return { row: row + 1, col };
  case 'up':
    return { row: row - 1, col };
  case 'right':
    return { col: col + 1, row };
  case 'left':
    return { col: col - 1, row };
  default:
    return { row, col };
  }
}

function nextState(state, { id, direction }) {
  return { ...state, [id]: { position: nextPosition(state[id].position, direction) } };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case MOVE:
    return nextState(state, action);
  default:
    return state;
  }
}
