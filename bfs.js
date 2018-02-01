/**
 * JavaScript implementation of BFS described here:
 * https://hackernoon.com/breadth-first-search-in-javascript-e655cd824fa4
 */


/**
 * Creates a simple Node object with a val and children array
 */
class Node {
    constructor(val) {
        this.val = val;
        this.children = [];
    }

    addChildren(...nodes) {
        for (let node of nodes) {
            this.children.push(node);
        }
    }
}

/**
 * Breadth-first search
 * @param  {Node} tree Nodes are trees themselves, so supply one to begin traversal
 * @param  {any} val Any type of val that a Node holds
 * @return {(Node|false)} Either a Node if it found one, or false if the Node isn't found in the tree
 */
function bfs(tree, val) {
    // Start with the first Node in the queue
    let queue = [tree];

    // Keep running until there are no Nodes left to examine
    while (queue.length) {

        // Get the first Node in our priority queue
        let currentNode = queue.shift();
        console.log('Current Node: ' + currentNode.val);

        // If our current Node matches the value we're looking for, return the Node and terminate
        if (currentNode.val === val) {
            return currentNode;
        } else {

            // Otherwise, add the children of our current node to the queue
            for (let child of currentNode.children) {
                queue.push(child);
            }
        }
    }

    // Node isn't found
    return false;
}

// Create Nodes that have children
let a = new Node('A');
let b = new Node('B');
let h = new Node('H');
let d = new Node('D');
let j = new Node('J');

// Set up tree. Nodes are objects and therefore can update references "out of order"
a.addChildren(b, h);
b.addChildren(new Node('C'), d, new Node('G'));
h.addChildren(new Node('I'), j);
d.addChildren(new Node('E'), new Node('F'));
j.addChildren(new Node('K'), new Node('Z'));

// Try a search for the 'K' Node
// console.log(bfs(a, 'K'));

module.exports = {
    Node: Node,
    bfs: bfs
};
