import { expect, describe, test } from "vitest";
import { createList, listToArray, addItemsToList, insertBeforeNode, removeItem, insertAfter, removeLast, filterList } from './src/linkedlist'

describe('addItemsToList function', () => {
    const listRef = createList();
    test('adds item to an empty list', () => {

        // add Item to empty list
        const node1 = addItemsToList(listRef, '1');
        expect(listRef.head).toBe(node1);
        expect(listRef.tail).toBe(node1);
        expect(node1.data).toBe('1');
        expect(node1.next).toBeNull();

        // add Item to list that is not empty
        const node2 = addItemsToList(listRef, '2');
        expect(listRef.tail).toBe(node2);
        expect(node2.data).toBe('2');
        expect(node2.next).toBeNull();

        // passing empty array to createList()
        const list = createList([]);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();

        // passing array to createList()
        const data = [1, 2, 3, 4, 5]
        const list1 = createList(data);
        let currentNode = list1.head;
        for (let i = 0; i < data.length; i += 1) {
            expect(currentNode.data).toBe(data[i]);
            if (i < data.length - 1) {
                expect(currentNode.next).not.toBeNull();
                currentNode = currentNode.next;
            }
        }
        expect(list1.tail).toBe(currentNode);
        const array = [1, 2, 3, 4, 5];
        const listFromArray = createList(array);
        expect(listFromArray.head.data).toBe(1);
        expect(listFromArray.tail.data).toBe(5);
        expect(listFromArray.head.next.data).toBe(2);
        expect(listFromArray.tail.next).toBe(null);

        // Creating a list from another list
        const originalList = { head: { data: 1, next: { data: 2, next: null } }, tail: { data: 2, next: null } };
        const listFromList = createList(originalList);
        expect(listFromList.head.data).toBe(1);
        expect(listFromList.tail.data).toBe(2);
        expect(listFromList.head.next.data).toBe(2);
        expect(listFromList.tail.next).toBe(null);

        // Creating an empty list from null
        const listFromNull = createList(null);
        expect(listFromNull.head).toBe(null);
        expect(listFromNull.tail).toBe(null);

        // Creating an empty list from an empty array
        const listFromEmptyArray = createList([]);
        expect(listFromEmptyArray.head).toBe(null);
        expect(listFromEmptyArray.tail).toBe(null);
    });
    test('list to array', () => {
        // Test Case 1: Empty linked list
        let list = { head: null, tail: null };
        let result = listToArray(list);
        expect(result).toEqual([]);

        // Test Case 2: Linked list with one element
        list = { head: { data: 1, next: null }, tail: null };
        result = listToArray(list);
        expect(result).toEqual([1]);

        // Test Case 3: Linked list with multiple elements
        list = {
            head: { data: 1, next: { data: 2, next: { data: 3, next: null } } },
            tail: null
        };
        result = listToArray(list);
        expect(result).toEqual([1, 2, 3]);

        // Test Case 4: Linked list with null data
        list = {
            head: { data: null, next: { data: 2, next: { data: 3, next: null } } },
            tail: null
        };
        result = listToArray(list);
        expect(result).toEqual([null, 2, 3]);

        // Test Case 5: Linked list with undefined data
        list = {
            head: { data: undefined, next: { data: 2, next: { data: 3, next: null } } },
            tail: null
        };
        result = listToArray(list);
        expect(result).toEqual([undefined, 2, 3]);
    });
    test('handles removing the head, tail, and middle item correctly', () => {
        // Initialize a list with three items
        const listRef1 = createList([1, 2, 3]);

        // Test removing the head of the list
        const resultHead = removeItem(listRef1, 1);
        expect(resultHead).toBe(true);
        expect(listToArray(listRef1)).toEqual([2, 3]);

        // Test removing the tail of the list
        const resultTail = removeItem(listRef1, 3);
        expect(resultTail).toBe(true);
        expect(listToArray(listRef1)).toEqual([2]);

        // Test removing an item in the middle of the list
        const resultMiddle = removeItem(listRef1, 2);
        expect(resultMiddle).toBe(true);
        expect(listToArray(listRef1)).toEqual([]);
    });
    test('handles inserting objects and arrays after nodes correctly', () => {
        // Initialize a list with mixed data types
        const listRef1 = createList([1, { a: 'b' }, [1, 2, 3], 4]);

        // Find the nodes after which to insert
        const nodeAfterFirst = listRef1.head.next;
        const nodeAfterSecond = listRef1.head.next.next;
        const nodeAfterThird = listRef1.head.next.next.next;

        // Test inserting an object after the first node
        insertAfter(listRef1, nodeAfterFirst, { c: 'd' });
        expect(listToArray(listRef1)).toEqual([1, { a: 'b' }, { c: 'd' }, [1, 2, 3], 4]);

        // Test inserting an array after the second node
        insertAfter(listRef1, nodeAfterSecond, [4, 5, 6]);
        expect(listToArray(listRef1)).toEqual([1, { a: 'b' }, { c: 'd' }, [1, 2, 3], [4, 5, 6], 4]);

        // Test inserting a number after the third node
        insertAfter(listRef1, nodeAfterThird, 5);
        expect(listToArray(listRef1)).toEqual([1, { a: 'b' }, { c: 'd' }, [1, 2, 3], [4, 5, 6], 4, 5]);
    });

    test('handles inserting before the head, tail, and middle node correctly', () => {
        // Initialize a list with three items
        const listRef1 = createList();
        const node1 = addItemsToList(listRef1, 2);
        const newList = insertBeforeNode(listRef1, node1, 1)
        expect(newList.tail).toEqual(node1);
        const node2 = addItemsToList(listRef, 3);
        expect(node2.data).toEqual(3);
    });
    test('handles various scenarios correctly', () => {
        // Initialize a list with three items
        let listRe = createList([1, 2, 3]);

        // Test removing the last item from a list with multiple items
        removeLast(listRe);
        expect(listToArray(listRe)).toEqual([1, 2]);

        // Reset the list for the next test
        listRe = createList([1]);

        // Test removing the last item from a list with only one item
        removeLast(listRe);
        expect(listToArray(listRe)).toEqual([]);

        // Reset the list for the next test
        listRe = createList();

        // Test attempting to remove the last item from an empty list
        const resultEmpty = removeLast(listRe);
        expect(resultEmpty).toBe(false);
        expect(listToArray(listRe)).toEqual([]);
    });
    test('tests filter list function', () => {
        let listRef3 = createList([1, 'two', 3, 'four', 5]);
        const stringsInList = filterList(listRef3);
        expect(stringsInList).toEqual(['two', 'four']);

        listRef3 = createList([1, 2, 3, 4, 5]);
        const stringsInListEmpty = filterList(listRef3);
        expect(stringsInListEmpty).toEqual([]);

        listRef3 = createList(['one', 'two', 'three']);
        const stringsInListAll = filterList(listRef3);
        expect(stringsInListAll).toEqual(['one', 'two', 'three']);
    });
});