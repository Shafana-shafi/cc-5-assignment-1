/**
 * Create a new Node 
 * @param {*} value Creates a node with value specified.
 * @returns {Node} with value equal to given value and next set to null
 */
function Node(value) {
    return {
        value,
        next: null
    }
}

/**
 * Creates a new LinkedList.
 * @returns {Object} An object representing the LinkedList with head and tail properties.
 */
function LinkedList() {
    let head = null;
    let tail = null;
    /**
     * Sets the head of the LinkedList.
     * @param {Object} node - The node to set as the head.
     */
    function setHead(node) {
        head = node;
    }

    /**
     * Sets the tail of the LinkedList.
     * @param {Object} node - The node to set as the tail.
     */
    function setTail(node) {
        tail = node;
    }

    /**
     * Retrieves the head of the linked list.
     * @memberof LinkedList
     * @returns {Node|null} - The head of the linked list, or null if the list is empty.
     */
    function getHead() {
        return head;
    }

    /**
     * Retrieves the tail of the linked list.
     * @memberof LinkedList
     * @returns {Node|null} - The tail of the linked list, or null if the list is empty.
     */
    function getTail() {
        return tail;
    }

    /**
     * Creates a linked list from an array of values.
     * @memberof LinkedList
     * @param {Array} arrayOrList - An array of values to create the linked list from.
     * @returns {Object} - An object containing the head and tail of the newly created linked list.
     */
    function createList(arrayOrList) {
        if (Array.isArray(arrayOrList)) {
            const list = { head: null, tail: null };
            arrayOrList.forEach(element => {
                const newNode = Node(element);
                if (list.head === null) {
                    list.head = newNode;
                    list.tail = newNode;
                } else {
                    list.tail.next = newNode;
                    list.tail = newNode;
                }
            });
            return list;
        }
        return { head: null, tail: null };
    }

    /**
     * Adds a new node to the end of the linked list.
     * @memberof LinkedList
     * @param {*} item - The value to be stored in the new node.
     * @returns {Node} - The newly added node.
     */
    function addItemToList(item) {
        const newNode = Node(item);
        if (!head) {
            setHead(newNode);
            setTail(newNode);
        } else {
            tail.next = newNode;
            setTail(newNode);
        }
        return newNode;
    }

    /**
     * Removes the last node from the linked list.
     * @memberof LinkedList
     */
    function removeLastNode() {
        if (!head) {
            return;
        }
        if (head === tail) {
            head = null;
            tail = null;
        } else {
            let current = head;
            while (current.next !== tail) {
                current = current.next;
            }
            tail = current;
            tail.next = null;
        }
    }

    /**
     * Inserts a new node before a specified target node.
     * @memberof LinkedList
     * @param {Node} targetNode - The node before which the new node will be inserted.
     * @param {*} data - The value to be stored in the new node.
     */
    function insertBeforeNode(targetNode, data) {
        const newNode = Node(data);
        if (!head || head === targetNode) {
            newNode.next = head;
            head = newNode;
            if (!tail) {
                tail = newNode;
            }
            return;
        }
        let current = head;
        while (current.next !== null && current.next !== targetNode) {
            current = current.next;
        }
        if (current.next !== targetNode) {
            return;
        }
        newNode.next = targetNode;
        current.next = newNode;
        if (targetNode === tail) {
            tail = newNode;
        }
    }

    /**
     * Inserts a new node after a specified target node.
     * @memberof LinkedList
     * @param {Node} targetNode - The node after which the new node will be inserted.
     * @param {*} data - The value to be stored in the new node.
     */
    function insertAfterNode(targetNode, data) {
        const newNode = Node(data);
        if (!head || head === targetNode) {
            newNode.next = head;
            head = newNode;
            if (!tail) {
                tail = newNode;
            }
            if (!head.next) {
                tail = head;
            }
            return;
        }
        let current = head;
        while (current.next !== null && current !== targetNode) {
            current = current.next;
        }
        if (current !== targetNode) {
            return;
        }
        newNode.next = current.next;
        current.next = newNode;
        if (newNode.next === null) {
            tail = newNode;
        }
    }

    /**
     * Removes all nodes from the linked list that contain a specified value.
     * @memberof LinkedList
     * @param {*} value - The value to be removed from the linked list.
     */
    function removeNodeWithValue(value) {
        if (!head) {
            return;
        }
        while (head && head.value === value) {
            if (head === tail) {
                head = null;
                tail = null;
                return;
            }
            head = head.next;
        }
        if (!head) {
            return;
        }
        let current = head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                if (current.next === null) {
                    tail = current;
                }
            } else {
                current = current.next;
            }
        }
        if (tail && tail.value === value) {
            tail = current;
        }
    }

    /**
     * Converts the linked list into an array.
     * @memberof LinkedList
     * @returns {Array} - An array containing the values of all nodes in the linked list.
     */
    function listToArray() {
        let currentNode = head;
        const array = [];
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }


    return {

        createList,
        addItemToList,
        removeLastNode,
        insertBeforeNode,
        insertAfterNode,
        removeNodeWithValue,
        listToArray,
        getHead,
        getTail
    }
}
export { Node, LinkedList }