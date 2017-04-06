export default function listElement(value) {
  this.value = value;
  this.next = null;
}

listElement.prototype.getValue = function() {
  return this.value;
}

listElement.prototype.setNext = function(listEl) {
  this.next = listEl;
  return listEl;
}

listElement.prototype.getNext = function() {
  return this.next;
}

// var firstNode = new listElement(1);
// var secondNode = new listElement(2);
// var thirdNode = new listElement(3);
// firstNode.setNext(secondNode);
// firstNode.next.setNext(thirdNode);
// console.log(firstNode);
