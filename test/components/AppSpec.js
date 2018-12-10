import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import App from 'components/App';

describe('App', () => {
  it('renders a title and tiles', () => {
    const subject = mount(<App />);
    expect(subject).to.have.descendants('h1');
    expect(subject.find('h1')).to.have.text('IceToids');

    const svg = subject.find('svg');
    expect(svg).to.have.attr('viewBox', '0 0 1200 1200');
    expect(svg).to.have.attr('width', '800');

    expect(svg).to.have.exactly(16).descendants('rect');
    const tiles = subject.find('rect');

    expect(tiles.first()).to.have.attr('width', '200');
    expect(tiles.first()).to.have.attr('height', '200');
    expect(tiles.first()).to.have.attr('x', '220');
    expect(tiles.first()).to.have.attr('y', '220');

    expect(tiles.last()).to.have.attr('x', '850');
    expect(tiles.last()).to.have.attr('y', '850');

    expect(svg).to.have.descendants('use');
    const pieces = subject.find('use');
    const piece = pieces.first();

    expect(piece).to.have.attr('x', '220');
    expect(piece).to.have.attr('y', '10');
    expect(piece).to.have.attr('fill', 'red');

    const instanceRoot = subject.find(piece.instance().getAttribute('href'));
    expect(instanceRoot).to.have.attr('points', '10,100 40,200 70,100');
    expect(instanceRoot).to.have.attr('stroke', 'black');

    const piece2 = pieces.at(1);
    expect(piece2).to.have.attr('x', '280');
    expect(piece2).to.have.attr('y', '10');
    expect(piece2).to.have.attr('fill', 'red');
    
    const piece3 = pieces.at(2);
    expect(piece3).to.have.attr('x', '340');
  });
});
