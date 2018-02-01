/**
 * JavaScript implementation of BFS described here:
 * https://hackernoon.com/breadth-first-search-in-javascript-e655cd824fa4
 */

/**
 * Breadth-first search
 * @param  {Node} tree Nodes are trees themselves, so supply one to begin traversal
 * @param  {any} val Any type of val that a Node holds
 * @return {(Node|false)} Either a Node if it found one, or false if the Node isn't found in the tree
 */
export default function bfs(tree, val) {
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
