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
    expect(svg).to.have.attr('viewBox', '0 0 1000 1000');
    expect(svg).to.have.attr('width', '800');

    expect(svg).to.have.exactly(16).descendants('rect');
    const rects = subject.find('rect');

    expect(rects.first()).to.have.attr('width', '200');
    expect(rects.first()).to.have.attr('height', '200');
    expect(rects.first()).to.have.attr('x', '10');
    expect(rects.first()).to.have.attr('y', '10');

    expect(rects.last()).to.have.attr('x', '640');
    expect(rects.last()).to.have.attr('y', '640');
  });
});
