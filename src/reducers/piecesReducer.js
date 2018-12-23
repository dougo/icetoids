import { MOVE } from 'actions/actionTypes';

const initialState = {
  red1: { position: { row: 0, col: 1 } },
  red2: { position: { row: 0, col: 1 } },
  red3: { position: { row: 0, col: 1 } },
  green1: { position: { row: 1, col: 5 } },
  green2: { position: { row: 1, col: 5 } },
  green3: { position: { row: 1, col: 5 } },
  blue1: { position: { row: 2, col: 0 } },
  blue2: { position: { row: 2, col: 0 } },
  blue3: { position: { row: 2, col: 0 } },
  yellow1: { position: { row: 5, col: 3 } },
  yellow2: { position: { row: 5, col: 3 } },
  yellow3: { position: { row: 5, col: 3 } }
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
