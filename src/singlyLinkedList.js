export function SinglyLinkedList() {
  this.length = 0;
  this.head = null;
}

SinglyLinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value);
  var currentNode = this.head;

  // if no head
  if (!this.head) {
    this.head = newNode;
    this.length++;
    return newNode;
  }

  // if list already has nodes
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = newNode;
  this.length++;
  return newNode;
};

SinglyLinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value);

  // if no head
  if (!this.head) {
    this.head = newNode;
    this.length++;
    return newNode;
  }

  // if there is a head, set the existing one to the next node of our new node
  newNode.next = this.head;
  this.head = newNode;
  this.length++;
  return newNode;
};

SinglyLinkedList.prototype.findNode = function(value) {
  var currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode;
    } else {
      currentNode = currentNode.next;
    }
  }

  return false;
};

SinglyLinkedList.prototype.deleteNode = function(value) {
  var currentNode = this.head;
  var deletedNode = null;

  if (this.head && this.head.value === value) {
    deletedNode = this.head;
    this.head = this.head.next;
    this.length--;
    return deletedNode;
  }

  while (currentNode) {
    if (currentNode.next && currentNode.next.value === value) {
      deletedNode = currentNode.next;
      // set next reference to the node after the deleted one
      currentNode.next = currentNode.next.next;
    }
    this.length--;
    return deletedNode;
  }

  return false;
};

export function Node(value) {
  this.value = value;
  this.next = null;
};

Node.prototype.getValue = function() {
  return this.value;
};

Node.prototype.setNext = function(listEl) {
  this.next = listEl;
  return listEl;
};

Node.prototype.getNext = function() {
  return this.next;
};
