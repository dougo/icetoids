import { MOVE } from 'actions/types';
import { move } from 'actions';

describe('action creator', () => {
  it('move takes an id and direction', () => {
    const subject = move('blue2', 'right');
    expect(subject).to.have.property('type', MOVE);
    expect(subject).to.have.property('id', 'blue2');
    expect(subject).to.have.property('direction', 'right');
  });
});
