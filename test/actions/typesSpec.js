import { MOVE, POINT } from 'actions/types';

describe('action type', () => {
  it('MOVE is defined', () => {
    expect(MOVE).to.be.a('string');
  });

  it('POINT is defined', () => {
    expect(POINT).to.be.a('string');
  });
});
