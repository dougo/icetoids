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

    const redHome = svg.find('g[transform="translate(210,0)"]');
    expect(redHome).to.have.exactly(3).descendants('use[href="#piece"]');
    const pieces = redHome.find('use[href="#piece"]');
    const piece = pieces.first();

    expect(piece).to.have.attr('x', '0');
    expect(piece).to.have.attr('y', '0');
    expect(piece).to.have.attr('fill', 'red');

    const instanceRoot = subject.find(piece.instance().getAttribute('href'));
    expect(instanceRoot).to.have.attr('points', '10,100 40,200 70,100');
    expect(instanceRoot).to.have.attr('stroke', 'black');

    const piece2 = pieces.at(1);
    expect(piece2).to.have.attr('x', '60');
    expect(piece2).to.have.attr('y', '0');
    expect(piece2).to.have.attr('fill', 'red');
    
    const piece3 = pieces.at(2);
    expect(piece3).to.have.attr('x', '120');

    const greenHome = svg.find('g[transform="translate(1050,210)"]');
    expect(greenHome).to.have.exactly(1).descendants('use[href="#piece"]');
    const piece4 = greenHome.find('use[href="#piece"]');
    expect(piece4).to.have.attr('x', '0');
    expect(piece4).to.have.attr('y', '0');
    expect(piece4).to.have.attr('fill', 'green');
    expect(piece4).to.have.attr('transform', 'rotate(90,100,100)');

    const blueHome = svg.find('g[transform="translate(0,420)"]');
    expect(blueHome).to.have.exactly(1).descendants('use[href="#piece"]');
    const piece5 = blueHome.find('use[href="#piece"]');
    expect(piece5).to.have.attr('x', '0');
    expect(piece5).to.have.attr('y', '-120');
    expect(piece5).to.have.attr('fill', 'blue');
    expect(piece5).to.have.attr('transform', 'rotate(270,100,-20)');
  });
});
