// eslint-disable-next-line max-classes-per-file
export default function bst() {
    /**
    * Represents a binary search tree node.
    * @class Node
    */
    class Node {
        /**
        * Creates an instance of Node.
        * @param {*} value - The value to be stored in the node.
        */
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    /**
    * Represents a binary search tree.
    * @class BSTree
    */

    class BSTree {
        constructor() {
            this.root = null;
        }
        /**
        * Inserts a new node with the given value into the binary search tree.
        * @param {*} value - The value to be inserted.
        */

        insert(value) {
            const newNode = new Node(value);
            if (this.root === null) {
                this.root = newNode;
            } else {
                this.insertRecursively(this.root, newNode);
            }
        }

        insertRecursively(node, newNode) {
            const node1 = node
            if (newNode.value < node.value) {
                if (node.left === null) {
                    node1.left = newNode;
                } else {
                    this.insertRecursively(node.left, newNode);
                }
            } else if (newNode.value > node.value) {
                if (node.right === null) {
                    node1.right = newNode;
                } else {
                    this.insertRecursively(node.right, newNode);
                }
            }
        }

        /**
        * Performs an in-order traversal of the binary search tree.
        * @returns {Array} - An array containing the values of the nodes in in-order traversal.
        */

        inOrderTraversal() {
            const result = [];
            function traverse(node) {
                if (node !== null) {
                    traverse(node.left);
                    result.push(node.value);
                    traverse(node.right);
                }
            }
            traverse(this.root);
            return result;
        }
        /**
        * Performs a pre-order traversal of the binary search tree.
        * @returns {Array} - An array containing the values of the nodes in pre-order traversal.
        */

        preOrderTraversal() {
            const result = [];
            function traverse(node) {
                if (node !== null) {
                    result.push(node.value);
                    traverse(node.left);
                    traverse(node.right);
                }
            }
            traverse(this.root);
            return result;
        }
        /**
        * Performs a post-order traversal of the binary search tree.
        * @returns {Array} - An array containing the values of the nodes in post-order traversal.
        */

        postOrderTraversal() {
            const result = [];
            function traverse(node) {
                if (node !== null) {
                    traverse(node.left);
                    traverse(node.right);
                    result.push(node.value);
                }
            }

            traverse(this.root);
            return result;
        }

        /**
        * Deletes a node with the given value from the binary search tree.
        * @param {*} root - The root node of the subtree to delete from.
        * @param {*} node - The node to be deleted.
        * @returns {*} - The root node of the modified subtree.
        */

        deleteNode(root, node) {
            const root1 = root;
            if (root1 === null) {
                return root1;
            }
            if (node.value < root1.value) {
                root1.left = this.deleteNode(root.left, node);
            } else if (node.value > root1.value) {
                root1.right = this.deleteNode(root1.right, node);
            } else {
                // Node with only one child or no child
                if (root.left === null) {
                    return root1.right;
                }
                if (root1.right === null) {
                    return root1.left;
                }
                // Node with two children: Get the inorder successor
                const successor = this.minValue(root, root.right);
                // Copy the value of the inorder successor to this node
                root1.value = successor.value;
                // Delete the inorder successor
                root1.right = this.deleteNode(root.right, successor);
            }
            return root1;

        }

        /**
        * Finds the node with the minimum value in the given subtree.
        * @param {*} root - The root node of the subtree to search in.
        * @param {*} node - The current node being checked.
        * @returns {*} - The node with the minimum value.
        */
        minValue(root, node) {
            let current = node;
            if (this.root) {
                while (current.left !== null) {
                    current = current.left;
                }
            }
            return current;
        }
    }
    return { Node, BSTree }
}
