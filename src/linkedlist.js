/* eslint-disable linebreak-style */
/**
 * Creates a new linked list from the given array or an existing linked list.
 * @param {Array|Object} arrayOrList The input can be an array of elements or an existing linked list object.
 * @returns {Object} A new linked list object. If the arrayOrList is an array, the new list will contain the elements of the array. If the arrayOrList is a linked list, the new list will be a copy of the input list.
 */
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