import { test } from 'vitest';
import { createAlphabeticIterator, alphabetIterable } from './src/alphabetIterable';

describe('Iterators for alphabet', () => {
    test('Test for producing alphabet letters from A to Z when used directly', () => {
        const generatedLetters = [];
        const iterator = createAlphabeticIterator();
        let result;
        while (!(result = iterator.next()).done) {
            generatedLetters.push(result.value);
        }
        expect(generatedLetters).toEqual(Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i)));
    });

    test('Test for producing alphabet letters from A to Z when used in a for-of loop', () => {
        const generatedLetters = [];
        for (const letter of alphabetIterable) {
            generatedLetters.push(letter);
        }
        expect(generatedLetters).toEqual(Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i)));
    });

    test('produces alphabet letters from A to Z when spread into an array', () => {
        expect([...alphabetIterable]).toEqual(Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i)));
    });
});
