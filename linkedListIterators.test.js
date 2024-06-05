import { afterEach } from "vitest";
import { LinkedList } from "./src/linkedlistIterators"

describe("Tests for linkedlist using iterators and generators", () => {
    let list;
    beforeEach(() => {
        list = new LinkedList();
    });
    test("Append elemnts to linked list", () => {
        list.appendToList(1);
        list.appendToList(2);
        list.appendToList(3);
        const listArray = []
        for (let node of list) {
            listArray.push(node);
        }
        expect(listArray).toEqual([1, 2, 3]);
    })

    test('remove all elements', () => {
        list.appendToList(1);
        list.appendToList(2);
        list.removeLast();
        list.removeLast();
        const values = [];
        for (const value of list) {
            values.push(value);
        }

        expect(values).toEqual([]);
    });
    test('Test for generator method yields correct values', () => {
        list.appendToList(1);
        list.appendToList(2);
        list.appendToList(3);

        const values = [];
        const generator = list.generator();
        let result = generator.next();
        while (!result.done) {
            values.push(result.value);
            result = generator.next();
        }

        expect(values).toEqual([1, 2, 3]);
    });
})