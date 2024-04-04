import { addItemsToList, createNewList } from "./linkedlist";
import { expect } from "vitest";
import { describe } from "vitest";
import { test } from "vitest";
import { createList, listToArray } from "./linkedlist";
import { removeItem, insertAfter, insertBefore, removeLast, filterList } from "./linkedlist";
describe('addItemsToList function', () => {
    let listRef = createList();
    test('adds item to an empty list', () => {
        //add Item to empty list
        const node1 = addItemsToList(listRef, '1');
        expect(listRef.head).toBe(node1);
        expect(listRef.tail).toBe(node1);
        expect(node1.data).toBe('1');
        expect(node1.next).toBeNull();
        //add Item to list that is not empty
        const node2 = addItemsToList(listRef, '2');
        expect(listRef.tail).toBe(node2);
        expect(node2.data).toBe('2');
        expect(node2.next).toBeNull();
        //passing empty array to createList()
        const list = createList([]);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        //passing array to createList()
        const data = [1, 2, 3, 4, 5]
        const list1 = createList(data);
        let currentNode = list1.head;
        for (let i = 0; i < data.length; i++) {
            expect(currentNode.data).toBe(data[i]);
            if (i < data.length - 1) {
                expect(currentNode.next).not.toBeNull();
                currentNode = currentNode.next;
            }
        }
        expect(list1.tail).toBe(currentNode);
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
        let listRef = createList([1, 2, 3]);

        // Test removing the head of the list
        const resultHead = removeItem(listRef, 1);
        expect(resultHead).toBe(true);
        expect(listToArray(listRef)).toEqual([2, 3]);

        // Test removing the tail of the list
        const resultTail = removeItem(listRef, 3);
        expect(resultTail).toBe(true);
        expect(listToArray(listRef)).toEqual([2]);

        // Test removing an item in the middle of the list
        const resultMiddle = removeItem(listRef, 2);
        expect(resultMiddle).toBe(true);
        expect(listToArray(listRef)).toEqual([]);
    });
    test('handles inserting after the head, tail, and middle node correctly', () => {
        // Initialize a list with three items
        let listRef = createList([1, 2, 3]);

        // Test inserting after the head of the list
        insertAfter(listRef, 1, 4);
        expect(listToArray(listRef)).toEqual([1, 4, 2, 3]);

        // Test inserting after the tail of the list
        insertAfter(listRef, 3, 5);
        expect(listToArray(listRef)).toEqual([1, 4, 2, 3, 5]);

        // Test inserting after a middle node
        insertAfter(listRef, 2, 6);
        expect(listToArray(listRef)).toEqual([1, 4, 2, 6, 3, 5]);
    });
    test('handles inserting before the head, tail, and middle node correctly', () => {
        // Initialize a list with three items
        let listRef = createList([1, 2, 3]);

        // Test inserting before the head of the list
        insertBefore(listRef, 1, 0);
        expect(listToArray(listRef)).toEqual([0, 1, 2, 3]);

        // Test inserting before the tail of the list
        insertBefore(listRef, 3, 4);
        expect(listToArray(listRef)).toEqual([0, 1, 2, 4, 3]);

        // Test inserting before a middle node
        insertBefore(listRef, 2, 5);
        expect(listToArray(listRef)).toEqual([0, 1, 5, 2, 4, 3]);
    });
    test('handles various scenarios correctly', () => {
        // Initialize a list with three items
        let listRef = createList([1, 2, 3]);

        // Test removing the last item from a list with multiple items
        removeLast(listRef);
        expect(listToArray(listRef)).toEqual([1, 2]);

        // Reset the list for the next test
        listRef = createList([1]);

        // Test removing the last item from a list with only one item
        removeLast(listRef);
        expect(listToArray(listRef)).toEqual([]);

        // Reset the list for the next test
        listRef = createList();

        // Test attempting to remove the last item from an empty list
        const resultEmpty = removeLast(listRef);
        expect(resultEmpty).toBe(false);
        expect(listToArray(listRef)).toEqual([]);
    });
    test('tests filter list function', () => {
        let listRef = createList([1, 'two', 3, 'four', 5]);
        const stringsInList = filterList(listRef);
        expect(stringsInList).toEqual(['two', 'four']);

        listRef = createList([1, 2, 3, 4, 5]);
        const stringsInListEmpty = filterList(listRef);
        expect(stringsInListEmpty).toEqual([]);

        listRef = createList(['one', 'two', 'three']);
        const stringsInListAll = filterList(listRef);
        expect(stringsInListAll).toEqual(['one', 'two', 'three']);
    });
    test('create new linked list with existing linked list', () => {
        let listRef = createList([1, 'two', 3, 'four', 5]);
        let returnedList = createNewList(listRef);
        expect(returnedList).toEqual(listRef);
        //if argumnet is not a list 
        let lisRef1 = createNewList("");
        expect(lisRef1).toBe(null);
    })
});