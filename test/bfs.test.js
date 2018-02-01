import chai from 'chai';
import bfs from '../src/bfs';
import Node from '../src/tree';

const expect = chai.expect;

describe('Node', () => {
    it('should be able to create a Node object', () => {
        expect(new Node('A')).to.be.an.instanceof(Node);
    });
    it('should have a set value from its constructor', () => {
        let x = new Node('A');
        expect(x.val).to.equal('A');
    });
});

describe('Breadth-first search', () => {
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

    it('returns false when the tree doesn\'t contain the Node', () => {
        expect(bfs(a, 'value not in tree')).to.equal(false);
    });

    it('returns the Node when found', () => {
        expect(bfs(a, 'D')).to.equal(d);
        expect(bfs(a, 'J').val).to.equal('J');
    });
});
