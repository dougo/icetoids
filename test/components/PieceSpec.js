import React from 'react';
import { expect, mountSVG } from 'testHelper';
import Piece from 'components/Piece';

describe('Piece', () => {
  it('has a def', () => {
    const subject = mountSVG(Piece.def);
    expect(subject).to.have.attr('id', 'piece');
    expect(subject).to.have.tagName('polygon');
    expect(subject).to.have.attr('points', '10,100 40,0 70,100');
    expect(subject).to.have.attr('stroke', 'black');
  });

  const mountSubject = (props = {}) => (
    mountSVG(<Piece {...props} />)
  );

  it('renders a use', () => {
    const subject = mountSubject();
    expect(subject).to.have.tagName('use'); 
    expect(subject).to.have.attr('href', '#piece');
    expect(subject).to.have.attr('x', '0');
    expect(subject).to.have.attr('y', '0');
    expect(subject).not.to.have.attr('fill');
    expect(subject).not.to.have.attr('transform');
  });

  it('accepts x/y local offset', () => {
    const subject = mountSubject({ x: 60, y: 100 });
    expect(subject).to.have.attr('x', '60');
    expect(subject).to.have.attr('y', '100');
  });

  it('accepts a color', () => {
    const subject = mountSubject({ color: 'red' });
    expect(subject).to.have.attr('fill', 'red');
  });

  it('accepts a direction', () => {
    const subject = mountSubject({ direction: 'left' });
    expect(subject).to.have.attr('transform', 'rotate(270,100,100)');
  });

  it('accepts a direction and x/y', () => {
    const subject = mountSubject({ x: 80, y: 40, direction: 'down' });
    expect(subject).to.have.attr('transform', 'rotate(180,180,140)');
  });
});
