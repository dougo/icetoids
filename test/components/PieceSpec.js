import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Piece from 'components/Piece';

describe('Piece', () => {
  const mountSVG = (component) => (
    mount(<svg>{component}</svg>).children()
  );

  it('has a def', () => {
    const subject = mountSVG(Piece.def);
    expect(subject).to.have.attr('id', 'piece');
    expect(subject).to.have.tagName('polygon');
    expect(subject).to.have.attr('points', '10,100 40,200 70,100');
    expect(subject).to.have.attr('stroke', 'black');
  });

  const mountSubject = (props = {}) => (
    mountSVG(<Piece {...props} />)
  );

  it('renders a use', () => {
    const subject = mountSubject();
    expect(subject).to.have.tagName('use'); 
    expect(subject).to.have.attr('href', '#piece');
    expect(subject).to.have.attr('x', '10');
    expect(subject).to.have.attr('y', '10');
    expect(subject).to.have.attr('fill', 'red');
  });

  it('accepts row/col props, with 5% space between', () => {
    const subject = mountSubject({ row: 2, col: 3 });
    expect(subject).to.have.attr('x', '640');
    expect(subject).to.have.attr('y', '430');
  });

  it('accepts x/y local offset', () => {
    const subject = mountSubject({ row: 2, col: 3, x: 60, y: 100 });
    expect(subject).to.have.attr('x', '700');
    expect(subject).to.have.attr('y', '530');
  });
});
