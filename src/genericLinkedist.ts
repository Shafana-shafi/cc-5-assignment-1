/**
 * Represents a node in a linked list.
 * @template T - The type of the value held by the node.
 */
export class Node<T>{
    data: T;
    next: Node<T>|null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Represents a linked list.
 * @template T - The type of the values held by the linked list.
 */
export class Linkedlist<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Appends an item to the end of the list.
     * @param {T} data - The data to append to the list.
     */
    appendItemToList(data: T): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }
    
    /**
     * Inserts an item before a specified node.
     * @param {T} data - The data to insert.
     * @param {Node<T>} targetNode - The node before which the new data should be inserted.
     */
    insertBefore(data: T, targetNode: Node<T>): void {
        let currentNode = this.head;
        let prevNode: Node<T> | null = null;
        while (currentNode !== null) {
        if (currentNode === targetNode) {
            const newNode = new Node(data);
            if (prevNode === null) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                newNode.next = currentNode;
                prevNode.next = newNode;
            }
            return;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    }

    /**
     * Inserts an item after the first occurrence of the specified target data.
     * @param {T} newData - The new data to insert.
     * @param {T} targetData - The data after which the new data should be inserted.
     */
    insertAfter(newData: T, targetData: T): void {
        let currentNode = this.head;
        while (currentNode !== null) {
          if (currentNode.data === targetData) {
            const newNode = new Node(newData);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            if (newNode.next === null) {
                this.tail = newNode;
            }
            return;
        }
        currentNode = currentNode.next;
    }
    }

     /**
     * Removes the last item from the list.
     * @returns {boolean} - Returns true if the last item was successfully removed, otherwise false.
     */
    removeLast():boolean{
        let currentNode = this.head;
        if (this.head === null) {
            return false;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return true;
        }
        while (currentNode!.next !== this.tail) {
        currentNode = currentNode!.next;
        }
        currentNode!.next = null;
        this.tail = currentNode;
        return true;
    }
}