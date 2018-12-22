import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';

Enzyme.configure({ adapter: new EnzymeAdapter() });

chai.use(chaiEnzyme());
chai.use(sinonChai);

// Cause a test failure on console error
console.error = msg => {
  throw new Error(msg);
};

// Require all test files
const testsContext = require.context('.', true, /^.*Spec.js$/);
testsContext.keys().forEach(testsContext);
