import { MOVE, POINT } from 'actions/types';

export function move(id, direction) {
  return { type: MOVE, id, direction };
}

export function point(id, direction) {
  return { type: POINT, id, direction };
}
