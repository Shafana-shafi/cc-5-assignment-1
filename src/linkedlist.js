/* eslint-disable linebreak-style */
/**
 * Creates a new linked list from the given array or an existing linked list.
 * @param {Array|Object} arrayOrList The input can be an array of elements or an existing linked list object.
 * @returns {Object} A new linked list object. If the arrayOrList is an array, the new list will contain the elements of the array. If the arrayOrList is a linked list, the new list will be a copy of the input list.
 */
// eslint-disable-next-line max-classes-per-file
export function createList(arrayOrList = null) {
    const list = { head: null, tail: null };
    if (Array.isArray(arrayOrList)) {
        arrayOrList.forEach(element => {
            const newNode = { data: element, next: null };
            if (list.head === null) {
                list.head = newNode;
                list.tail = newNode;
            } else {
                list.tail.next = newNode;
                list.tail = newNode;
            }
        });
    }
    else if (arrayOrList && typeof arrayOrList === 'object' && arrayOrList.head && arrayOrList.tail) {
        let currentNode = arrayOrList.head;
        while (currentNode !== null) {
            const newNode = { data: currentNode.data, next: null };
            if (list.head === null) {
                list.head = newNode;
                list.tail = newNode;
            } else {
                list.tail.next = newNode;
                list.tail = newNode;
            }
            currentNode = currentNode.next;
        }
    }
    else {
        return list;
    }

    return list;
}

/**
 * Adds a new node with data to the end of a linked list.
 * @param {Object} listRef The linked list object.
 * @param {*} data The data for the new node.
 * @returns {Object} The new node added to the list.
 */
export function addItemsToList(listRef, data) {
    // Create a local variable that references the same object as listRef
    const list = listRef;

    const newNode = { data, next: null };
    if (list.head === null) {
        list.head = newNode;
        list.tail = newNode;
    } else {
        list.tail.next = newNode;
        list.tail = newNode;
    }
    return newNode;
}


/**
 * Converts an array to a linked list.
 * @param {Array} array The input array.
 * @returns {Object} The linked list created from the array.
 */
export function listFromArray(array) {
    const list = createList();
    for (let i = 0; i < array.length; i += 1) {
        addItemsToList(list, array[i])
    }
    return list;
}
/**
 * Inserts a new node with newData before the first node containing targetData.
 * @param {Object} listRef The linked list object.
 * @param {node} targetNode The target node before which the new data has to be inserted.
 * @param {*} newData The data for the new node.
 * @returns {list} returns updated list.
 */
export function insertBeforeNode(listRef, targetNode, newData) {
    const list = listRef;
    let currentNode = list.head;
    let prevNode = null;
    while (currentNode !== null) {
        if (currentNode === targetNode) {
            const newNode = { data: newData, next: currentNode };
            if (prevNode === null) {
                list.head = newNode;
            } else {
                prevNode.next = newNode;
            }
            return list;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    return list;
}

/**
 * Removes the last node from the list.
 * @param {Object} listRef The linked list object.
 * @returns {boolean} True if the node was removed, false if the list is empty.
 */
export function removeLast(listRef) {
    const list = listRef;
    if (list.head === null) {
        return false;
    }
    if (list.head === list.tail) {
        list.head = null;
        list.tail = null;
        return true;
    }
    let cur = list.head;
    while (cur.next !== list.tail) {
        cur = cur.next;
    }
    cur.next = null;
    list.tail = cur;
    return true;
}
/**
 * Inserts a new node with newData after the first node containing targetData.
 * @param {Object} listRef The linked list object.
 * @param {*} targetData The data to find in the list.
 * @param {*} newData The data for the new node.
 * @returns {boolean} True if the node was inserted, false otherwise.
 */
export function insertAfter(listRef, targetNode, newData) {
    const list = listRef;
    const target = targetNode;
    if (targetNode === null || targetNode === list.tail) {
        const newNode = { data: newData, next: null };
        if (list.tail) {
            list.tail.next = newNode;
        } else {
            list.head = newNode;
        }
        list.tail = newNode;
    } else {
        const newNode = { data: newData, next: targetNode.next };
        target.next = newNode;
    }
    return true;
}

/**
 * Converts a linked list to an array.
 * @param {Object} list The linked list object.
 * @returns {Array} An array containing the data from each node in the list.
 */
export function listToArray(list) {
    const array = [];
    let currentNode = list.head;
    while (currentNode !== null) {
        array.push(currentNode.data);
        currentNode = currentNode.next;
    }
    return array;
}
/**
 * Filters the list based on a condition and returns an array of the filtered data.
 * @param {Object} listRef The linked list object.
 * @param {Function} [isString=(node)=>{}] A function to test each node's data. Defaults to checking if the data is a string.
 * @returns {Array} An array of the filtered data.
 */
export function filterList(listRef, isString = (node) => {
    if (typeof node.data === 'string') {
        return true;
    }
    return false;
}) {
    let cur = listRef.head;
    const result = [];
    while (cur !== null) {
        if (isString(cur)) {
            result.push(cur.data);
        }
        cur = cur.next;
    }
    return result;
}
/**
 * Removes the first node containing the specified item from the list.
 * @param {Object} listRef The linked list object.
 * @param {*} item The data to remove from the list.
 * @returns {boolean} True if the node was removed, false otherwise.
 */
export function removeItem(listRef, item) {
    const list = listRef
    let currentNode = listRef.head;
    let prevNode = null;

    while (currentNode !== null) {
        if (currentNode.data === item) {
            if (prevNode === null) {
                list.head = currentNode.next;
                if (list.head === null) {
                    list.tail = null;
                }
            } else {
                prevNode.next = currentNode.next;
                if (currentNode.next === null) {
                    list.tail = prevNode;
                }
            }
            return true;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    return false;
}
export function traverse(listRef, visit) {
    let currentNode = listRef.head;
    while (currentNode) {
        visit(currentNode);
        currentNode = currentNode.next;

    }
}


export function linkedListOop() {
    /**
     * Represents a node in a linked list.
      * @class
    */
    class Node {
        /**
        * Create a node.
        * @param {*} value - The value to be stored in the node.
        */
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }
    /**
     * Represents a linked list.
     * @class
    */
    class LinkedList {
        constructor(arrayOrList = null) {
            this.head = null;
            this.size = 0;
            this.tail = null;

            if (Array.isArray(arrayOrList)) {
                arrayOrList.forEach(element => {
                    const newNode = new Node(element);
                    if (this.head === null) {
                        this.head = newNode;
                        this.tail = newNode;
                    } else {
                        this.tail.next = newNode;
                        this.tail = newNode;
                    }
                    this.size += 1;
                });
            } else if (arrayOrList && typeof arrayOrList === 'object' && arrayOrList.head && arrayOrList.tail) {
                let currentNode = arrayOrList.head;
                while (currentNode !== null) {
                    const newNode = new Node(currentNode.value);
                    if (this.head === null) {
                        this.head = newNode;
                        this.tail = newNode;
                    } else {
                        this.tail.next = newNode;
                        this.tail = newNode;
                    }
                    this.size += 1;
                    currentNode = currentNode.next;
                }
            }
        }
        // 
        /**
         * Convert the list to an array.
         * @returns {Array} An array containing the values of the list.
         */

        listToArray() {
            const array = [];
            let currentNode = this.head;
            while (currentNode !== null) {
                array.push(currentNode.value);
                currentNode = currentNode.next;
            }
            return array;
        }

        /**
        * Insert a new node before a target node.
        * @param {*} targetData - The value of the target node.
        * @param {*} newData - The value for the new node.
        * @returns {boolean} True if the node was inserted, false otherwise.
        */

        insertBeforeNode(targetData, newData) {
            let currentNode = this.head;
            let prevNode = null;
            while (currentNode !== null) {
                if (currentNode.value === targetData) {
                    const newNode = new Node(newData);
                    if (prevNode === null) {
                        newNode.next = this.head;
                        this.head = newNode;
                    } else {
                        newNode.next = currentNode;
                        prevNode.next = newNode;
                    }
                    return true;
                }
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            return false;
        }
        /**
        * Remove the last node from the list.
        * @returns {boolean} True if the node was removed, false if the list is empty.
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
        * Insert a new node after a target node.
        * @param {*} targetData - The value of the target node.
        * @param {*} newData - The value for the new node.
        * @returns {boolean} True if the node was inserted, false otherwise.
        */

        insertAfterNode(targetData, newData) {
            let currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.value === targetData) {
                    const newNode = new Node(newData);
                    newNode.next = currentNode.next;
                    currentNode.next = newNode;
                    if (newNode.next === null) {
                        this.tail = newNode;
                    }
                    return true;
                }
                currentNode = currentNode.next;
            }
            return false;
        }
        /**
        * Filter the list based on a predicate function.
        * @param {Function} isString - A predicate function to test each node's value.
        * @returns {Array} An array of values that pass the predicate test.
        */

        filterList(isString = (value) => typeof value === 'string') {
            let cur = this.head;
            const result = [];
            while (cur !== null) {
                if (isString(cur.value)) {
                    result.push(cur.value);
                }
                cur = cur.next;
            }
            return result;
        }

        /**
        * Remove a specified item from the list.
        * @param {*} item - The item to remove from the list.
        * @returns {boolean} True if the item was removed, false otherwise.
        */

        removeItem(item) {
            let currentNode = this.head;
            let prevNode = null;
            while (currentNode !== null) {
                if (currentNode.value === item) {
                    if (prevNode === null) {
                        this.head = currentNode.next;
                        if (this.head === null) {
                            this.tail = null;
                        }
                    } else {
                        prevNode.next = currentNode.next;
                        if (currentNode.next === null) {
                            this.tail = prevNode;
                        }
                    }
                    return true;
                }
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            return false;
        }

    }
    return LinkedList
}
