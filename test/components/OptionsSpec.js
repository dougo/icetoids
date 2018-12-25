import React from 'react';
import { expect, mountSVG } from 'testHelper';
import Options from 'components/Options';

describe('Options', () => {
  const mountSubject = (props = {}) => (
    mountSVG(<Options {...props} />)
  );

  it('renders a g with four half-size pieces', () => {
    const subject = mountSubject({ color: 'green' });
    expect(subject).to.have.tagName('g'); 
    expect(subject).to.have.attr('transform', 'scale(0.5)');
    expect(subject).to.have.exactly(4).descendants('use[href="#piece"][fill="green"]');
    const opts = subject.children().children();
    expect(opts.at(0)).to.have.attr('transform', 'translate(0,-130)');
    expect(opts.at(1)).to.have.attr('transform', 'translate(130,0)');
    expect(opts.at(2)).to.have.attr('transform', 'translate(0,130)');
    expect(opts.at(3)).to.have.attr('transform', 'translate(-130,0)');
  });

  it('calls action with a direction when you click on an option', () => {
    const action = sinon.stub();
    const subject = mountSubject({ action });
    const right = subject.find('use[href="#piece"]').at(1);
    right.simulate('click');
    expect(action).to.have.been.calledWith('right');
  });

  describe('with a direction', () => {
    const props = { direction: 'right' };

    it('renders a full-size piece in the direction', () => {
    const subject = mountSubject(props);
      expect(subject).not.to.have.attr('transform');
      expect(subject).to.have.exactly(1).descendants('use[href="#piece"]');
      const opt = subject.find('g').last();
      expect(opt).to.have.attr('transform', 'translate(110,0)');
    });
  });
});
