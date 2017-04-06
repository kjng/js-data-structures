import chai from 'chai';
import linkedList from '../linkedList';

const expect = chai.expect;

describe('linkedList', function() {
  it('should be a function', function() {
    expect(linkedList).to.be.a('function');
  });
});
