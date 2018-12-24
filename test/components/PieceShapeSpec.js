import React from 'react';
import { expect, mountSVG } from 'testHelper';
import PieceShape from 'components/PieceShape';

describe('PieceShape', () => {
  it('has defs', () => {
    const subject = mountSVG(PieceShape.defs);
    expect(subject).to.have.descendants('#piece');
    expect(subject).to.have.descendants('#upright');

    const pieceDef = subject.find('#piece');
    expect(pieceDef).to.have.tagName('polygon');
    expect(pieceDef).to.have.attr('points', '-30,50 0,-50 30,50');
    expect(pieceDef).to.have.attr('stroke', 'black');
    expect(pieceDef).to.have.attr('cursor', 'grab');

    const uprightDef = subject.find('#upright');
    expect(uprightDef).to.have.tagName('g');
    expect(uprightDef).to.have.exactly(1).descendants('rect');
    expect(uprightDef).to.have.exactly(2).descendants('line');

    const uprightRect = uprightDef.find('rect');
    expect(uprightRect).to.have.attr('x', '-30');
    expect(uprightRect).to.have.attr('y', '-30');
    expect(uprightRect).to.have.attr('width', '60');
    expect(uprightRect).to.have.attr('height', '60');
    expect(uprightRect).to.have.attr('stroke', 'black');
    expect(uprightRect).to.have.attr('cursor', 'grab');

    const uprightLines = uprightDef.find('line');
    expect(uprightLines.first()).to.have.attr('x1', '-30');
    expect(uprightLines.first()).to.have.attr('y1', '-30');
    expect(uprightLines.first()).to.have.attr('x2', '30');
    expect(uprightLines.first()).to.have.attr('y2', '30');
    expect(uprightLines.first()).to.have.attr('stroke', 'black');
    expect(uprightLines.last()).to.have.attr('x1', '30');
    expect(uprightLines.last()).to.have.attr('y1', '-30');
    expect(uprightLines.last()).to.have.attr('x2', '-30');
    expect(uprightLines.last()).to.have.attr('y2', '30');
    expect(uprightLines.last()).to.have.attr('stroke', 'black');
  });

  const mountSubject = (props = {}) => (
    mountSVG(<PieceShape {...props} />)
  );

  it('renders a use', () => {
    const subject = mountSubject();
    expect(subject).to.have.tagName('use'); 
    expect(subject).to.have.attr('href', '#upright');
    expect(subject).not.to.have.attr('fill');
    expect(subject).not.to.have.attr('transform');
  });

  it('accepts a color', () => {
    const subject = mountSubject({ color: 'red' });
    expect(subject).to.have.attr('fill', 'red');
  });

  it('accepts a direction', () => {
    const subject = mountSubject({ direction: 'left' });
    expect(subject).to.have.attr('href', '#piece');
    expect(subject).to.have.attr('transform', 'rotate(270)');
  });

  it('calls move when clicked on', () => {
    const move = sinon.stub();
    const subject = mountSubject({ move });
    subject.simulate('click');
    expect(move).to.have.been.called;
  });
});
