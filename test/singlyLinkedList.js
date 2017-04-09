import chai from 'chai';
import { SinglyLinkedList, Node } from '../singlyLinkedList';

const expect = chai.expect;

describe('Node', function() {
  it('should be a function', function() {
    expect(Node).to.be.a('function');
  })
  it('should have a getValue method', function() {
    expect(Node.prototype.getValue).to.exist;
  });
  it('should have a setNext method', function() {
    expect(Node.prototype.setNext).to.exist;
  });
  it('should have a getNext method', function() {
    expect(Node.prototype.getNext).to.exist;
  });
});

describe('SinglyLinkedList', function() {
  it('should be a function', function() {
    expect(SinglyLinkedList).to.be.a('function');
  });
  it('should have an addToTail function', function() {
    expect(SinglyLinkedList.prototype.addToTail).to.exist;
    expect(SinglyLinkedList.prototype.addToTail).to.be.a('function');
  });
  it('should have an addToHead method', function() {
    expect(SinglyLinkedList.prototype.addToHead).to.exist;
    expect(SinglyLinkedList.prototype.addToHead).to.be.a('function');
  });
});
