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
  });
});
