import React from 'react';
import { mount } from 'enzyme';

export * from 'chai';
export * from 'enzyme';

export const mountSVG = (component) => (
  mount(<svg>{component}</svg>).children()
);
