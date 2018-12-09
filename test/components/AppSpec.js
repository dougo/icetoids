import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import App from 'components/App';

describe('App', () => {
  it('renders a div', () => {
    const subject = mount(<App />);
    expect(subject).to.have.descendants('h1');
    expect(subject.find('h1')).to.have.text('IceToids');
  });
});
