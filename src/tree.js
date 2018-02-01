export default class Tree {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }

    /**
     * Adds a single tree to the children array
     * @param {Tree} child 
     */
    addChild(child) {
        this.children = this.children.concat(child);
    }

    /**
     * Adds children Trees to the Tree children array
     * @param {[Tree]|Tree} children Supports an array of Trees or multiple Trees comma-separated in params 
     */
    addChildren(...children) {
        if (children.length === 1) {
            this.children = this.children.concat(children[0]);
        } else {
            this.children = this.children.concat(children);
        }
    }
}
