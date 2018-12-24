import React from 'react';
import { expect, mountSVG } from 'testHelper';
import Piece from 'components/Piece';

describe('Piece', () => {
  it('has defs', () => {
    const subject = mountSVG(Piece.defs);
    expect(subject).to.have.descendants('#piece');
    expect(subject).to.have.descendants('#upright');
  });

  const mountSubject = (props = {}) => (
    mountSVG(<Piece {...props} />)
  );

  it('renders a g', () => {
    const subject = mountSubject();
    expect(subject).to.have.tagName('g'); 
    expect(subject).to.have.attr('transform', 'translate(0,0)');
    expect(subject).to.have.exactly(1).descendants('use[href="#upright"]');
  });

  it('accepts x/y local offset', () => {
    const subject = mountSubject({ x: 60, y: 100 });
    expect(subject).to.have.attr('transform', 'translate(60,100)');
  });

  it('can be selected when upright', () => {
    const select = sinon.stub();
    const subject = mountSubject({ select });
    subject.find('use[href="#upright"]').simulate('click');
    expect(select).to.have.been.called;
  });

  it('can be moved when pointed in a direction', () => {
    const move = sinon.stub();
    const subject = mountSubject({ direction: 'up', move });
    subject.find('use[href="#piece"]').simulate('click');
    expect(move).to.have.been.called;
  });


  describe('when selected', () => {
    const props = { isSelected: true };

    describe('when upright', () => {
      it('displays four directions', () => {
        const subject = mountSubject(props);
        expect(subject).to.have.exactly(4).descendants('use[href="#piece"]');
      });
    });
  });
});
