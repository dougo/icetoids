import { MOVE, POINT } from 'actions/types';
import { move, point } from 'actions';

describe('action creator', () => {
  it('move takes an id and direction', () => {
    const subject = move('blue2', 'right');
    expect(subject).to.have.property('type', MOVE);
    expect(subject).to.have.property('id', 'blue2');
    expect(subject).to.have.property('direction', 'right');
  });

  it('point takes an id and direction', () => {
    const subject = point('yellow3', 'left');
    expect(subject).to.have.property('type', POINT);
    expect(subject).to.have.property('id', 'yellow3');
    expect(subject).to.have.property('direction', 'left');
  });
});
