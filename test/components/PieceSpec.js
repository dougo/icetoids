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

  it('can be selected when pointed in a direction', () => {
    const select = sinon.stub();
    const subject = mountSubject({ direction: 'left', select });
    subject.find('use[href="#piece"]').simulate('click');
    expect(select).to.have.been.called;
  });

  it('can be selected when upright', () => {
    const select = sinon.stub();
    const subject = mountSubject({ select });
    subject.find('use[href="#upright"]').simulate('click');
    expect(select).to.have.been.called;
  });

  describe('when selected', () => {
    const props = { isSelected: true };

    describe('when pointed in a direction', () => {
      it('can be moved in that direction', () => {
        const move = sinon.stub();
        const subject = mountSubject({ ...props, direction: 'up', move });
        expect(subject).to.have.exactly(2).descendants('use[href="#piece"]');
        subject.find('use[href="#piece"]').last().simulate('click');
        expect(move).to.have.been.called;
      });
    });

    describe('when upright', () => {
      it('displays four options and points when one is clicked', () => {
        const point = sinon.stub();
        const subject = mountSubject({ ...props, color: 'blue', point });
        expect(subject).to.have.exactly(4).descendants('use[href="#piece"][fill="blue"]');
        subject.find('use[href="#piece"]').at(2).simulate('click');
        expect(point).to.have.been.calledWith('down');
      });
    });
  });
});
