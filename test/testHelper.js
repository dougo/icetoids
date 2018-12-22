import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';

export * from 'chai';
export * from 'enzyme';

export const mountSVG = (component) => (
  mount(<svg>{component}</svg>).children()
);

// The following function is adapted from code by Blake Bowen.
// https://greensock.com/forums/topic/13681-svg-gotchas/?page=2&tab=comments#comment-72060
export function getBBox(element) {
  var svg = element.ownerSVGElement;
  
  if (!svg) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }
  
  var r = element.getBBox(); 
  var p = svg.createSVGPoint(); 
      
  var matrix = svg.getScreenCTM().inverse().multiply(element.getScreenCTM());

  p.x = r.x;
  p.y = r.y;
  var a = p.matrixTransform(matrix);

  p.x = r.x + r.width;
  p.y = r.y;
  var b = p.matrixTransform(matrix);

  p.x = r.x + r.width;
  p.y = r.y + r.height;
  var c = p.matrixTransform(matrix);

  p.x = r.x;
  p.y = r.y + r.height;
  var d = p.matrixTransform(matrix);

  var minX = Math.min(a.x, b.x, c.x, d.x);
  var maxX = Math.max(a.x, b.x, c.x, d.x);
  var minY = Math.min(a.y, b.y, c.y, d.y);
  var maxY = Math.max(a.y, b.y, c.y, d.y);
    
  var width = maxX - minX;
  var height = maxY - minY;
  
  return {
    x: minX,
    y: minY,
    width: width,
    height: height
  };
}

chai.use((_, utils) => {
  utils.addMethod(chai.Assertion.prototype, 'bbox', function (bounds) {
    new chai.Assertion(getBBox(this._obj.getDOMNode())).to.include(bounds);
  });
});
