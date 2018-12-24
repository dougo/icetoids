import { MOVE } from 'actions/types';

export function move(id, direction) {
  return { type: MOVE, id, direction };
}
