export function createList(data = null) {
    if (Array.isArray(data)) {
        let list = { head: null, tail: null }
        data.forEach(element => {
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

export function listFromArray(array) {
    let list = createList();
    for (let i = 0; i < array.length; i++) {
        addItemsToList(list, array[i])
    }
    return list;
}
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

export function listToArray(list) {
    const array = [];
    let currentNode = list.head;
    while (currentNode !== null) {
        array.push(currentNode.data);
        currentNode = currentNode.next;
    }
    return array;
}
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