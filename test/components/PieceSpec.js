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
});
