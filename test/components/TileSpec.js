import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Tile from 'components/Tile';

describe('Tile', () => {
  function mountSubject(props = {}) {
    return mount(<svg><Tile {...props} /></svg>).children();
  }

  it('renders a 200x200 skyblue-bordered linen square', () => {
    const subject = mountSubject();
    expect(subject).to.have.tagName('rect'); 
    expect(subject).to.have.attr('x', '10');
    expect(subject).to.have.attr('y', '10');
    expect(subject).to.have.attr('width', '200');
    expect(subject).to.have.attr('height', '200');
    expect(subject).to.have.attr('stroke', 'skyblue');
    expect(subject).to.have.attr('fill', 'linen');
  });

  it('accepts row/col props, with 5% space between', () => {
    const subject = mountSubject({ row: 2, col: 3 });
    expect(subject).to.have.attr('x', '640');
    expect(subject).to.have.attr('y', '430');
  });
});
