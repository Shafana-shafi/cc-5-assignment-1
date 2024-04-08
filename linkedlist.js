/**
 * Creates a new linked list from the given array or returns an empty list if no array is provided.
 * @param {Array} [array=null] The array of elements to be added to the linked list. If not provided, an empty list is returned.
 * @returns {Object} An object representing the linked list.If the input is not an array, an empty list object is returned.
 */
export function createList(array = null) {
    if (Array.isArray(array)) {
        let list = { head: null, tail: null }
        array.forEach(element => {
            let newNode = { data: element, next: null }
            if (list.head === null) {
                list.head = newNode;
                list.tail = newNode;
            }
            else {
                list.tail.next = newNode;
                list.tail = newNode
            }
        });
        return list;
    }
    else {
        return { head: null, tail: null };
    }
}
/**
 * Adds a new node with data to the end of a linked list.
 * @param {Object} listRef The linked list object.
 * @param {*} data The data for the new node.
 * @returns {Object} The new node added to the list.
 */
export function addItemsToList(listRef, data) {
    let newNode = { data: data, next: null };
    if (listRef.head === null) {
        listRef.head = newNode;
        listRef.tail = newNode;
    } else {
        listRef.tail.next = newNode;
        listRef.tail = newNode;
    }
    return newNode;
}
/**
 * Converts an array to a linked list.
 * @param {Array} array The input array.
 * @returns {Object} The linked list created from the array.
 */
export function listFromArray(array) {
    let list = createList();
    for (let i = 0; i < array.length; i++) {
        addItemsToList(list, array[i])
    }
    return list;
}
/**
 * Inserts a new node with newData before the first node containing targetData.
 * @param {Object} listRef The linked list object.
 * @param {*} targetData The data to find in the list.
 * @param {*} newData The data for the new node.
 * @returns {boolean} True if the node was inserted, false otherwise.
 */
export function insertBefore(listRef, targetData, newData) {
    let currentNode = listRef.head;
    let prevNode = null;
    while (currentNode !== null) {
        if (currentNode.data === targetData) {
            const newNode = { data: newData, next: currentNode };
            if (prevNode === null) {
                listRef.head = newNode;
            } else {

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
 * Removes the last node from the list.
 * @param {Object} listRef The linked list object.
 * @returns {boolean} True if the node was removed, false if the list is empty.
 */
export function removeLast(listRef) {
    if (listRef.head === null) {
        return false;
    }
    if (listRef.head === listRef.tail) {
        listRef.head = null;
        listRef.tail = null;
        return true;
    }
    let cur = listRef.head;
    while (cur.next !== listRef.tail) {
        cur = cur.next;
    }
    cur.next = null;
    listRef.tail = cur;
    return true;
}
/**
 * Inserts a new node with newData after the first node containing targetData.
 * @param {Object} listRef The linked list object.
 * @param {*} targetData The data to find in the list.
 * @param {*} newData The data for the new node.
 * @returns {boolean} True if the node was inserted, false otherwise.
 */
export function insertAfter(listRef, targetData, newData) {
    let currentNode = listRef.head;
    while (currentNode !== null) {
        if (currentNode.data === targetData) {
            const newNode = { data: newData, next: currentNode.next };
            currentNode.next = newNode;
            if (currentNode === listRef.tail) {
                listRef.tail = newNode;
            }
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
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
    let result = [];
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
    let currentNode = listRef.head;
    let prevNode = null;

    while (currentNode !== null) {
        if (currentNode.data === item) {
            if (prevNode === null) {
                listRef.head = currentNode.next;
                if (listRef.head === null) {
                    listRef.tail = null;
                }
            } else {
                prevNode.next = currentNode.next;
                if (currentNode.next === null) {
                    listRef.tail = prevNode;
                }
            }
            return true;
        }
        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    return false;
}
/**
 * Creates a new linked list from the given data.
 * @param {Object} data The data to create the new list from. Must have `head` and `tail` properties.
 * @returns {Object|null} The new linked list object or null if the input data is invalid.
 */
export function createNewList(data) {
    if (!(data.head && data.tail)) {
        console.log(data);
        return null;
    }
    else {
        let list = { head: null, tail: null }
        let cur = data.head;
        while (cur != null) {
            let newNode = { data: cur.data, next: null }
            if (list.head === null) {
                list.head = newNode;
                list.tail = newNode;
            }
            else {
                list.tail.next = newNode;
                list.tail = newNode
            }
            cur = cur.next;
        }
        console.log(list);
        return list;
    }
}