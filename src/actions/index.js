import { MOVE } from 'actions/actionTypes';

export function move(id, direction) {
  return { type: MOVE, id, direction };
}
