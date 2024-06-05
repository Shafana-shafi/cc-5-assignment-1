/**
 * Class representing a Node in a linked list.
 */
// eslint-disable-next-line max-classes-per-file
export class Node {
    /**
     * Create a Node.
     * @param {*} data - The data to store in the node.
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Class representing a linked list.
 */
export class LinkedList {
    /**
     * Create an empty linked list.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Append a new node with the given data to the end of the list.
     * @param {*} data - The data to store in the new node.
     */
    appendToList(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * Insert a new node with the given data after the specified node.
     * @param {*} data - The data to store in the new node.
     * @param {Node} prevNode - The node after which to insert the new node.
     */
    insertAfter(data, prevNode) {
        if (!prevNode) {
            return;
        }
        const newNode = new Node(data);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        if (prevNode === this.tail) {
            this.tail = newNode;
        }
    }

    /**
     * Insert a new node with the given data before the specified node.
     * @param {*} data - The data to store in the new node.
     * @param {Node} nextNode - The node before which to insert the new node.
     */
    insertBefore(data, nextNode) {
        if (!nextNode) {
            return;
        }
        const newNode = new Node(data);
        if (nextNode === this.head) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current && current.next !== nextNode) {
            current = current.next;
        }
        if (!current) {
            return;
        }
        newNode.next = nextNode;
        current.next = newNode;
    }

    /**
     * Remove the last node from the list.
     * @returns {boolean} True if a node was removed, false if the list was empty.
     */
    removeLast() {
        if (this.head === null) {
            return false;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return true;
        }
        let cur = this.head;
        while (cur.next !== this.tail) {
            cur = cur.next;
        }
        cur.next = null;
        this.tail = cur;
        return true;
    }

    /**
     * Return an iterator for the linked list.
     * @returns {Object} An iterator for the linked list.
     */
    [Symbol.iterator]() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    const value = current.data;
                    current = current.next;
                    return { value, done: false };
                }
                return { done: true };
            }
        };
    }

    /**
     * Generator function to iterate over the linked list.
     * @returns {Generator<*, void, *>} A generator that yields the data of each node in the list.
     */
    *generator() {
        let current = this.head;
        while (current) {
            yield current.data;
            current = current.next;
        }
    }
}
