import chai from 'chai';
import { SinglyLinkedList, Node } from '../singlyLinkedList';

const expect = chai.expect;

describe('Node', function() {
  it('should be a function', function() {
    expect(Node).to.be.a('function');
  })
  it('should have a value property', function() {
    var newNode = new Node(1);
    expect(newNode.value).to.exist;
    expect(newNode.value).to.equal(1);
  });
  it('should have a next property', function() {
    var newNode = new Node(1);
    expect(newNode.next).to.equal(null);
  });
  it('should have a setNext method', function() {
    expect(Node.prototype.setNext).to.exist;
  });
  it('setNext should set the next property on a Node', function() {
    var firstNode = new Node(1);
    firstNode.setNext(new Node(2));
    expect(firstNode.next.value).to.equal(2);
  });
});

describe('SinglyLinkedList', function() {
  it('should be a function', function() {
    expect(SinglyLinkedList).to.be.a('function');
  });
  it('should have a length property', function() {
    var newList = new SinglyLinkedList(1);
    expect(newList.length).to.equal(0);
  });
  it('adding Nodes should increase the length property', function() {
    var newList = new SinglyLinkedList();
    newList.addToHead(1);
    newList.addToTail(2);
    expect(newList.length).to.equal(2);
  });

  describe('addToTail', function() {
    it('should have an addToTail function', function() {
      expect(SinglyLinkedList.prototype.addToTail).to.exist;
      expect(SinglyLinkedList.prototype.addToTail).to.be.a('function');
    });
    it('addToTail should add a new Node to the end of an existing list', function() {
      var newList = new SinglyLinkedList();
      newList.addToTail(1);
      expect(newList.head.value).to.equal(1);
      newList.addToTail(2);
      expect(newList.head.next.value).to.equal(2);
    });
  });

  describe('addToHead', function() {
    it('should have an addToHead method', function() {
      expect(SinglyLinkedList.prototype.addToHead).to.exist;
      expect(SinglyLinkedList.prototype.addToHead).to.be.a('function');
    });
    it('addToHead should set the head on an empty list', function() {
      var newList = new SinglyLinkedList();
      newList.addToHead(1);
      expect(newList.head.value).to.equal(1);
    });
    it('addToHead should replace the head on a populated list and update the next reference', function() {
      var newList = new SinglyLinkedList();
      newList.addToHead(2);
      newList.addToHead(1);
      expect(newList.head.value).to.equal(1);
      expect(newList.head.next.value).to.equal(2);
    });
  })

  describe('findNode', function() {
    var newList = new SinglyLinkedList();
    newList.addToTail(1);
    newList.addToTail(2);
    newList.addToTail(3);
    it('is a function', function() {
      expect(SinglyLinkedList.prototype.findNode).to.be.a('function');
    });
    it('should return the node if it is found', function() {
      var foundNode = newList.findNode(3);
      expect(foundNode).to.exist;
      expect(foundNode.value).to.equal(3);
      expect(foundNode.next).to.eql(new Node(2));
    });
    it('should return false if the node is not found', function() {
      expect(newList.findNode(4)).to.equal(false);
    });
  });
});
