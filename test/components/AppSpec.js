import React from 'react';
import { expect, mount } from 'testHelper';
import App from 'components/App';

describe('App', () => {
  const root = document.createElement('div');
  document.body.append(root);

  const mountSubject = () => (
    mount(<App />, { attachTo: root })
  );

  it('renders a title and tiles', () => {
    const subject = mountSubject();
    expect(subject).to.have.descendants('h1');
    expect(subject.find('h1')).to.have.text('IceToids');

    const svg = subject.find('svg');
    expect(svg).to.have.attr('viewBox', '100 100 1050 1050');
    expect(svg).to.have.attr('width', '1050');

    expect(svg).to.have.exactly(16).descendants('use[href="#tile"]');
    const tiles = svg.find('use[href="#tile"]');
    expect(tiles.first()).to.have.bbox({ x: 210, y: 210, width: 200, height: 200 });
    expect(tiles.last()).to.have.bbox({ x: 840, y: 840 });

    expect(svg).to.have.exactly(12).descendants('use[href="#piece"]');
    const pieces = svg.find('use[href="#piece"]');
    expect(pieces.at(0)).to.have.bbox({ x: 220, y: 100, width: 60, height: 100 });
    expect(pieces.at(0)).to.have.attr('fill', 'red');

    expect(pieces.at(1)).to.have.bbox({ x: 280, y: 100 });
    expect(pieces.at(1)).to.have.attr('fill', 'red');
    
    expect(pieces.at(2)).to.have.bbox({ x: 340 });

    expect(pieces.at(3)).to.have.bbox({ x: 1050, y: 220, width: 100, height: 60 });
    expect(pieces.at(3)).to.have.attr('fill', 'green');

    expect(pieces.at(4)).to.have.bbox({ x: 1050, y: 280 });
    expect(pieces.at(4)).to.have.attr('fill', 'green');

    expect(pieces.at(5)).to.have.bbox({ x: 1050, y: 340 });

    expect(pieces.at(6)).to.have.bbox({ x: 100, y: 430, width: 100, height: 60 });
    expect(pieces.at(6)).to.have.attr('fill', 'blue');

    expect(pieces.at(7)).to.have.bbox({ x: 100, y: 490 });
    expect(pieces.at(7)).to.have.attr('fill', 'blue');

    expect(pieces.at(8)).to.have.bbox({ x: 100, y: 550 });

    expect(pieces.at(9)).to.have.bbox({ x: 640, y: 1050, width: 60, height: 100 });
    expect(pieces.at(9)).to.have.attr('fill', 'yellow');

    expect(pieces.at(10)).to.have.bbox({ x: 700, y: 1050 });
    expect(pieces.at(10)).to.have.attr('fill', 'yellow');

    expect(pieces.at(11)).to.have.bbox({ x: 760, y: 1050 });
  });

  it('moves a piece when you click on it', () => {
    const subject = mountSubject();
    const piece = subject.find('use[href="#piece"]').first();
    expect(piece).to.have.bbox({ x: 220, y: 100 });
    piece.simulate('click');
    expect(piece).to.have.bbox({ x: 220, y: 310 });
  });
});
