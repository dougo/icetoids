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
    const tiles = svg.find('use[href="#tile"]');
    expect(tiles.first()).to.have.bbox({ x: 210, y: 210, width: 200, height: 200 });
    expect(tiles.last()).to.have.bbox({ x: 840, y: 840 });

    expect(svg).to.have.exactly(5).descendants('use[href="#piece"]');
    const pieces = svg.find('use[href="#piece"]');
    const piece = pieces.first();

    expect(piece).to.have.bbox({ x: 220, y: 100, width: 60, height: 100 });
    expect(piece).to.have.attr('fill', 'red');

    const piece2 = pieces.at(1);
    expect(piece2).to.have.bbox({ x: 280, y: 100 });
    expect(piece2).to.have.attr('fill', 'red');
    
    const piece3 = pieces.at(2);
    expect(piece3).to.have.bbox({ x: 340 });

    const piece4 = pieces.at(3);
    expect(piece4).to.have.bbox({ x: 1050, y: 220, width: 100, height: 60 });
    expect(piece4).to.have.attr('fill', 'green');

    const piece5 = pieces.at(4);
    expect(piece5).to.have.bbox({ x: 100, y: 430, width: 100, height: 60 });
    expect(piece5).to.have.attr('fill', 'blue');
  });
});
