import chai from 'chai';
import Tree from '../src/tree';

const expect = chai.expect;

describe('Tree', () => {
    it('exists', () => {
        let t = new Tree();
        expect(t).to.exist;
    });

    it('can set a value', () => {
        let t = new Tree(1);
        expect(t.val).to.equal(1);
    });

    it('can add a child', () => {
        let t = new Tree(1);
        t.addChild(new Tree(2));
        expect(t.children[0].val).to.equal(2);
    });

    describe('can add multiple children at once', () => {
        it('supports children in multiple params', () => {
            let t = new Tree(1);
            t.addChildren(new Tree(2), new Tree(3));
            expect(t.children.length).to.equal(2);
        });
        it('supports children in an array', () => {
            let t = new Tree(1);
            t.addChildren([new Tree(2), new Tree(3)]);
            expect(t.children.length).to.equal(2);
        });
    });
});
