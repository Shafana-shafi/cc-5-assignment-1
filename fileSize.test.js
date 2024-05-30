import { getFileOrFolderSizeSync, getSizeOfFileOrFolderAsync } from "./src/fileSize"

describe("Test for getSizeOfFileOrFolderSync", () => {
    test("Test for getting size of a file", () => {
        expect(getFileOrFolderSizeSync("./src/prime.js")).toBe(1766);
    })
    test("Test for getting size of a folder", () => {
        expect(getFileOrFolderSizeSync("/root/tdd/cc-5-assignment-1/textFolder")).toBe(8);
    })
})
describe('Tests for getSizeOfFileOrFolderAsync', () => {
    test('should return the size of a file', async () => {
        getSizeOfFileOrFolderAsync("./src/map-reduce-filter.js", (err, size) => {
            expect(err).toBeNull();
            expect(size).toBe(22745);
        });
    });
    test('should return the total size of files in a directory', () => {
        getSizeOfFileOrFolderAsync("./src", async (err, size) => {
            expect(err).toBeNull();
            expect(size).toBe(85119);
        });
    });
    test('should return an error for non-existent paths', async () => {
        const nonExistentPath = './nonExistentPath';
        getSizeOfFileOrFolderAsync(nonExistentPath, (err, size) => {
            expect(err).not.toBeNull();
            expect(size).toBeUndefined();
        });
    });
});