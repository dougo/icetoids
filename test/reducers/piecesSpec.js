import { move, point } from 'actions';
import reducer from 'reducers/pieces';

describe('reducer', () => {
  it('returns the initial state', () => {
    const subject = reducer();
    expect(subject).to.have.property('red1').deep.equal({ position: { row: 0, col: 1 }, direction: 'down' });
    expect(subject).to.have.property('yellow3').deep.equal({ position: { row: 5, col: 3 }, direction: 'up' });
  });

  describe('with state', () => {
    const state = {
      red1: { position: { row: 4, col: 2 } }
    };

    it('returns the state', () => {
      const subject = reducer(state);
      expect(subject).to.eq(state);
    });

    it('moves down', () => {
      const subject = reducer(state, move('red1', 'down'));
      expect(subject).to.have.property('red1').deep.equal({ position: { row: 5, col: 2 } });
    });

    it('moves up', () => {
      const subject = reducer(state, move('red1', 'up'));
      expect(subject).to.have.property('red1').deep.equal({ position: { row: 3, col: 2 } });
    });

    it('moves right', () => {
      const subject = reducer(state, move('red1', 'right'));
      expect(subject).to.have.property('red1').deep.equal({ position: { row: 4, col: 3 } });
    });

    it('moves left', () => {
      const subject = reducer(state, move('red1', 'left'));
      expect(subject).to.have.property('red1').deep.equal({ position: { row: 4, col: 1 } });
    });

    it('stays put', () => {
      const subject = reducer(state, move('red1'));
      expect(subject).to.have.property('red1').deep.equal({ position: { row: 4, col: 2 } });
    });

    it('points in a direction', () => {
      const subject = reducer(state, point('red1', 'down'));
      expect(subject).to.have.property('red1').deep.equal({ position: { row: 4, col: 2 }, direction: 'down' });
    });
  });
});
