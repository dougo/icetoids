import React from 'react';
import { expect, mount } from 'testHelper';
import App from 'components/App';

describe('App', () => {
  const root = document.createElement('div');
  document.body.append(root);

  it('renders a title and tiles', () => {
    const subject = mount(<App />, { attachTo: root });
    expect(subject).to.have.descendants('h1');
    expect(subject.find('h1')).to.have.text('IceToids');

    const svg = subject.find('svg');
    expect(svg).to.have.attr('viewBox', '100 100 1050 1050');
    expect(svg).to.have.attr('width', '1050');

    expect(svg).to.have.exactly(16).descendants('use[href="#tile"]');
    const upperLeft = svg.find('g[transform="translate(210,210)"]');
    const tile = upperLeft.find('use[href="#tile"]');
    expect(tile).to.have.bbox({ x: 210, y: 210, width: 200, height: 200 });

    expect(svg).to.have.exactly(1).descendants('g[transform="translate(840,840)"]');

    const redHome = svg.find('g[transform="translate(210,0)"]');
    expect(redHome).to.have.exactly(3).descendants('use[href="#piece"]');
    const pieces = redHome.find('use[href="#piece"]');
    const piece = pieces.first();

    expect(piece).to.have.bbox({ x: 220, y: 100, width: 60, height: 100 });
    expect(piece).to.have.attr('fill', 'red');

    const instanceRoot = subject.find(piece.instance().getAttribute('href'));
    expect(instanceRoot).to.have.attr('points', '10,100 40,200 70,100');
    expect(instanceRoot).to.have.attr('stroke', 'black');

    const piece2 = pieces.at(1);
    expect(piece2).to.have.bbox({ x: 280, y: 100 });
    expect(piece2).to.have.attr('fill', 'red');
    
    const piece3 = pieces.at(2);
    expect(piece3).to.have.bbox({ x: 340 });

    const greenHome = svg.find('g[transform="translate(1050,210)"]');
    expect(greenHome).to.have.exactly(1).descendants('use[href="#piece"]');
    const piece4 = greenHome.find('use[href="#piece"]');
    expect(piece4).to.have.bbox({ x: 1050, y: 220, width: 100, height: 60 });
    expect(piece4).to.have.attr('fill', 'green');

    const blueHome = svg.find('g[transform="translate(0,420)"]');
    expect(blueHome).to.have.exactly(1).descendants('use[href="#piece"]');
    const piece5 = blueHome.find('use[href="#piece"]');
    expect(piece5).to.have.bbox({ x: 100, y: 430, width: 100, height: 60 });
    expect(piece5).to.have.attr('fill', 'blue');
  });
});
