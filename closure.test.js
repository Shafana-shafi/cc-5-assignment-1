import { expect, test } from 'vitest';
import { LinkedList } from './src/closure';

describe('LinkedList', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    test('addItemToList should add items to the list and update head and tail', () => {
        list.addItemToList(1);
        list.addItemToList(2);
        list.addItemToList(3);

        expect(list.getHead().value).toBe(1);
        expect(list.getTail().value).toBe(3);
        expect(list.getHead().next.value).toBe(2);
    });

    test('removeLastNode should remove the last node from the list and update tail', () => {
        list.addItemToList(1);
        list.addItemToList(2);
        list.addItemToList(3);
        list.removeLastNode();

        expect(list.getTail().value).toBe(2);
        expect(list.getTail().next).toBe(null);
    });

    test('insertBeforeNode should insert a node before the target node and update head if needed', () => {
        const node = list.addItemToList(1);
        list.addItemToList(3);
        list.insertBeforeNode(node, 2);

        expect(list.getHead().value).toBe(2);
        expect(list.getTail().value).toBe(3);
        expect(list.getHead().next.value).toBe(1);
    });

    test('insertAfterNode should insert a node after the target node and update tail if needed', () => {
        const node = list.addItemToList(1);
        list.addItemToList(2);
        list.insertAfterNode(node, 3);
        expect(list.getHead().value).toBe(3)
        expect(list.getTail().value).toBe(2);
        expect(list.getTail().next).toBe(null);
    });

    test('insertBefore', () => {
        list.addItemToList(1);
        const node = list.addItemToList(3);
        list.insertAfterNode(node, 2);
        expect(list.listToArray()).toEqual([1, 3, 2]);
    })
    test('removeNodeWithValue should remove nodes with the specified value and update head and tail if needed', () => {
        list.addItemToList(1);
        list.addItemToList(2);
        list.addItemToList(3);
        list.addItemToList(2);
        list.removeNodeWithValue(2);

        expect(list.getHead().value).toBe(1);
        expect(list.getTail().value).toBe(3);
        expect(list.getHead().next.value).toBe(3);
        expect(list.getTail().next).toBe(null);
    });

    test('createList should create a list from an array', () => {
        const array = [1, 2, 3];
        const newList = list.createList(array);

        expect(newList.head.value).toBe(1);
        expect(newList.tail.value).toBe(3);
    });
});
