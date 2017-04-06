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
  it('should have a null next pointer on creation', function() {
    var list = new linkedList(1);
    expect(list.getNext()).to.equal(null);
  });
  it('setting next should point to the new node', function() {
    var list = new linkedList(1);
    var secondList = new linkedList(2);
    list.setNext(secondList);
    expect(list.getNext()).to.equal(secondList);
  });
});
