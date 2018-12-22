import React from 'react';
import { expect, mountSVG } from 'testHelper';
import Tile from 'components/Tile';

describe('Tile', () => {
  it('has a def', () => {
    const subject = mountSVG(Tile.def);
    expect(subject).to.have.attr('id', 'tile');
    expect(subject).to.have.tagName('rect');
    expect(subject).to.have.attr('x', '-100');
    expect(subject).to.have.attr('y', '-100');
    expect(subject).to.have.attr('width', '200');
    expect(subject).to.have.attr('height', '200');
    expect(subject).to.have.attr('stroke', 'skyblue');
    expect(subject).to.have.attr('fill', 'linen');
  });

  function mountSubject(props = {}) {
    return mountSVG(<Tile {...props} />);
  }

  it('renders a use', () => {
    const subject = mountSubject();
    expect(subject).to.have.tagName('use');
    expect(subject).to.have.attr('href', '#tile');
  });
});
