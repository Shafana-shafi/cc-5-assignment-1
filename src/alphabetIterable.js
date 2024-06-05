/**
 * Creates an iterator that produces alphabet letters from 'A' to 'Z'.
 * @returns {Object} An iterator with a next() method.
 */
const createAlphabeticIterator = () => {
    let position = 0;
    return {
        next() {
            if (position < 26) {
                const value = String.fromCharCode('A'.charCodeAt(0) + position);
                position += 1;
                return { value, done: false };
            }
            return { value: undefined, done: true };

        }
    };
};

/**
 * An iterable object that produces alphabet letters from 'A' to 'Z'.
 * @type {Object}
 */
const alphabetIterable = {
    [Symbol.iterator]() {
        return createAlphabeticIterator();
    }
};

export { alphabetIterable, createAlphabeticIterator }