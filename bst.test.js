import bst from './src/bst'

describe('Binary Search Tree', () => {
    let bst1;
    /**
     * Test suite for insertion operations.
     */
    describe('Insertion', () => {
        /**
         *  Prepare the binary search tree before each test.
         */
        beforeEach(() => {
            const { BSTree } = bst();
            bst1 = new BSTree();
        });
        /**
         *  Test case to ensure insertion of a single node
         */
        test('should insert a single node', () => {

            bst1.insert(5);
            expect(bst1.root.value).toBe(5);
            expect(bst1.root.left).toBeNull();
            expect(bst1.root.right).toBeNull();
        });

        /**
         * Test case to ensure creation of a tree with multiple nodes.
         */

        test('should create a tree with nodes 1, 2, 3, and 4', () => {

            bst1.insert(2);
            bst1.insert(1);
            bst1.insert(3);
            bst1.insert(4);
            // Assert the structure of the tree
            expect(bst1.root.value).toBe(2);
            expect(bst1.root.left.value).toBe(1);
            expect(bst1.root.right.value).toBe(3);
            expect(bst1.root.right.right.value).toBe(4);
        });
    });

    /**
     * Test case to ensure insertion of multiple nodes
     */
    test('should insert multiple nodes', () => {
        bst1.insert(5);
        bst1.insert(3);
        bst1.insert(7);
        expect(bst1.root.value).toBe(2);
        expect(bst1.root.left.value).toBe(1);
        expect(bst1.root.right.value).toBe(3);
    });
});

describe('Traversal', () => {
    /**
     * Prepare the binary search tree before each test.
     */
    let bst1;
    beforeEach(() => {
        const { BSTree } = bst();
        bst1 = new BSTree();
    });

    /**
     * Test case to perform in-order traversal.
     */
    test('should perform in-order traversal', () => {
        bst1.insert(5);
        bst1.insert(3);
        bst1.insert(7);
        expect(bst1.inOrderTraversal()).toEqual([3, 5, 7]);
    });
    /**
     * Test case to perform pre-order traversal
     */
    test('should perform pre-order traversal', () => {
        bst1.insert(5);
        bst1.insert(3);
        bst1.insert(7);
        expect(bst1.preOrderTraversal()).toEqual([5, 3, 7]);
    });

    /**
     * Test case to perform post-order traversal.
     */
    test('should perform post-order traversal', () => {
        bst1.insert(5);
        bst1.insert(3);
        bst1.insert(7);
        expect(bst1.postOrderTraversal()).toEqual([3, 7, 5]);
    });

    /**
     * Test case to handle traversal methods with an empty tree.
     */
    test('should handle empty tree for traversal methods', () => {
        expect(bst1.inOrderTraversal()).toEqual([]);
        expect(bst1.preOrderTraversal()).toEqual([]);
        expect(bst1.postOrderTraversal()).toEqual([]);
    });

    /**
     * Test case to delete a leaf node.
     */
    describe('Deletion', () => {
        test('should delete a leaf node', () => {
            bst1.insert(5);
            bst1.insert(3);
            bst1.insert(7);
            bst1.deleteNode(bst1.root, bst1.root.left);
            expect(bst1.root.left).toBeNull();
        });

        /**
         * Test case to delete a node with one child.
         */
        test('should delete a node with one child', () => {
            bst1.insert(5);
            bst1.insert(3);
            bst1.insert(7);
            bst1.deleteNode(bst1.root, bst1.root);
            expect(bst1.root.value).toBe(7);
            expect(bst1.root.left.value).toBe(3);
        });
        /**
         * Test case to handle deleting the root node.
         */
        test('should handle deleting the root node', () => {
            bst1.insert(5);
            bst1.insert(3);
            bst1.insert(7);
            bst1.deleteNode(bst1.root, bst1.root);
            expect(bst1.root.value).toBe(7);
            expect(bst1.root.left.value).toBe(3);
            expect(bst1.root.right).toBeNull();
        });
    });
});