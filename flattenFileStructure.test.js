import { describe, test, expect } from 'vitest';
import { flattenSync, flattenAsync } from './src/flattenFileStructure';



describe('flattenSync', () => {
    test('should flatten directory structure synchronously', () => {
        const result = flattenSync("./textFolder");
        expect(result).toEqual(expect.arrayContaining([
            "textFolder/text.txt",
            "textFolder/text2.txt",
        ]));
    });

    test('should return an array with a single file path if a file is provided', () => {
        const result = flattenSync("bst.test.js");
        expect(result).toEqual(["bst.test.js"]);
    });
});

describe('flattenAsync', () => {
    test('should flatten directory structure asynchronously', async () => {
        flattenAsync("./textFolder", (err, result) => {
            expect(err).toBeNull();
            expect(result).toEqual(expect.arrayContaining([
                "textFolder/text.txt",
                "textFolder/text2.txt",
            ]));
        });
    });

    test('should return an array with a single file path if a file is provided', async () => {
        flattenAsync("bst.test.js", (err, result) => {
            expect(err).toBeNull();
            expect(result).toEqual(["bst.test.js"]);
        });
    });

    test('should handle errors correctly', async () => {
        flattenAsync('non-existent-path', (err, result) => {
            expect(err).not.toBeNull();
            expect(result).toBeUndefined();
        });
    });
});
