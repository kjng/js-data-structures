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
