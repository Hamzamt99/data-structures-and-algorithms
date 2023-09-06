
const Hash = require('../Hash')

function tree_intersection(tree1, tree2) {
    const commonValues = [];

    const hash = new Hash(100);

    function addToHash(node) {
        if (node) {
            hash.set(node.value, true);
            addToHash(node.left);
            addToHash(node.right);
        }
    }

    addToHash(tree1.root);

    function checkForCommonValues(node) {
        if (node) {
            if (hash.has(node.value)) {
                commonValues.push(node.value);
            }
            checkForCommonValues(node.left);
            checkForCommonValues(node.right);
        }
    }

    checkForCommonValues(tree2.root);

    return commonValues;
}


// test the function
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


const tree1 = {
    root: new TreeNode('1', new TreeNode('2'), new TreeNode('3')),
};

const tree2 = {
    root: new TreeNode('2', new TreeNode('4'), new TreeNode('5')),
};

const commonValues = tree_intersection(tree1, tree2);
console.log("Common Values:", commonValues);

module.exports = TreeNode;