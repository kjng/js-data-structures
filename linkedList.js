export function singlyLinkedList(value) {
  this.length = 0;
  this.head = null;
}

singlyLinkedList.prototype.addToTail = function(value) {
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
}

singlyLinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value);

  // if no head
  if (!this.head) {
    this.head = newNode;
    return newNode;
  }

  // if there is a head, set the existing one to the next node of our new node
  newNode.next = this.head;
  this.head = newNode;
  return newNode;
}

export function Node(value) {
  this.value = value;
  this.next = null;
}

Node.prototype.getValue = function() {
  return this.value;
}

Node.prototype.setNext = function(listEl) {
  this.next = listEl;
  return listEl;
}

Node.prototype.getNext = function() {
  return this.next;
}
