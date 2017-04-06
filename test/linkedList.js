import chai from 'chai';
import linkedList from '../linkedList';

const expect = chai.expect;

describe('linkedList', function() {
  it('should be a function', function() {
    expect(linkedList).to.be.a('function');
  });
  it('should have a getValue method on the prototype', function() {
    expect(linkedList.prototype.getValue).to.exist;
  });
  it('should have a setNext method', function() {
    expect(linkedList.prototype.setNext).to.exist;
  });
  it('should have a getNext method', function() {
    expect(linkedList.prototype.getNext).to.exist;
  });
  it('should set the node value from the argument', function() {
    var list = new linkedList(1);
    expect(list.getValue()).to.equal(1);
  });
});
