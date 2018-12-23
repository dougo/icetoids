import { move } from 'actions';
import * as reducers from 'reducers';

describe('reducers', () => {
  it('include pieces', () => {
    expect(reducers.pieces).to.be.a('function');
  });
});
