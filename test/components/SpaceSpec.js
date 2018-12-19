import React from 'react';
import { expect, mountSVG } from 'testHelper';
import Space from 'components/Space';

describe('Space', () => {
  const mountSubject = (props = {}) => (
    mountSVG(<Space {...props} />)
  );

  it('renders a g with children', () => {
    const subject = mountSubject({ children: <div /> });
    expect(subject).to.have.tagName('g'); 
    expect(subject).to.have.attr('transform', 'translate(0,0)');
    expect(subject).to.have.exactly(1).descendants('div');
  });

  it('accepts row/col props, with 5% space between', () => {
    const subject = mountSubject({ row: 2, col: 3 });
    expect(subject).to.have.attr('transform', 'translate(630,420)');
  });
});
