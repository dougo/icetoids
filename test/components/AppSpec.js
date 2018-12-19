import React from 'react';
import { expect, mount } from 'testHelper';
import App from 'components/App';

describe('App', () => {
  it('renders a title and tiles', () => {
    const subject = mount(<App />);
    expect(subject).to.have.descendants('h1');
    expect(subject.find('h1')).to.have.text('IceToids');

    const svg = subject.find('svg');
    expect(svg).to.have.attr('viewBox', '100 100 1050 1050');
    expect(svg).to.have.attr('width', '1050');

    expect(svg).to.have.exactly(16).descendants('use[href="#tile"]');
    const tiles = subject.find('use[href="#tile"]');
    const tile = tiles.first();

    const tileDef = subject.find(tile.instance().getAttribute('href'));
    expect(tileDef).to.have.attr('width', '200');
    expect(tileDef).to.have.attr('height', '200');

    expect(tile).to.have.attr('x', '210');
    expect(tile).to.have.attr('y', '210');

    expect(tiles.last()).to.have.attr('x', '840');
    expect(tiles.last()).to.have.attr('y', '840');

    expect(svg).to.have.descendants('use[href="#piece"]');
    const pieces = subject.find('use[href="#piece"]');
    const piece = pieces.first();

    expect(piece).to.have.attr('x', '210');
    expect(piece).to.have.attr('y', '0');
    expect(piece).to.have.attr('fill', 'red');

    const instanceRoot = subject.find(piece.instance().getAttribute('href'));
    expect(instanceRoot).to.have.attr('points', '10,100 40,200 70,100');
    expect(instanceRoot).to.have.attr('stroke', 'black');

    const piece2 = pieces.at(1);
    expect(piece2).to.have.attr('x', '270');
    expect(piece2).to.have.attr('y', '0');
    expect(piece2).to.have.attr('fill', 'red');
    
    const piece3 = pieces.at(2);
    expect(piece3).to.have.attr('x', '330');

    const piece4 = pieces.at(3);
    expect(piece4).to.have.attr('x', '1050');
    expect(piece4).to.have.attr('y', '210');
    expect(piece4).to.have.attr('fill', 'green');
    expect(piece4).to.have.attr('transform', 'rotate(90,1150,310)');

    const piece5 = pieces.at(4);
    expect(piece5).to.have.attr('x', '0');
    expect(piece5).to.have.attr('y', '300');
    expect(piece5).to.have.attr('fill', 'blue');
    expect(piece5).to.have.attr('transform', 'rotate(270,100,400)');
  });
});
