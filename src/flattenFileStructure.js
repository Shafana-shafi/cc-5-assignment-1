import fs from 'fs';
import path from 'path';

/**
 * Synchronously flattens a directory structure.
 * @param {string} dirPath - The directory path to flatten.
 * @returns {string[]} - An array of file paths.
 */
export function flattenSync(dirPath) {
    const result = [];
    if (fs.statSync(dirPath).isFile()) {
        return [dirPath];
    }
    function traverse(currentPath) {
        const items = fs.readdirSync(currentPath);
        items.forEach((item) => {
            const fullPath = path.join(currentPath, item);
            if (fs.statSync(fullPath).isDirectory()) {
                traverse(fullPath);
            } else {
                result.push(fullPath);
            }
        })
    }
    traverse(dirPath);
    return result;
}

/**
 * Asynchronously flattens a directory structure.
 * @param {string} dirPath - The directory path to flatten.
 * @param {function} callback - The callback function (err, result).
 */
export function flattenAsync(dirPath, callback) {
    fs.stat(dirPath, (err, stats) => {
        if (err) return callback(err);
        if (stats.isFile()) {
            return callback(null, [dirPath]);
        }
        const result = []
        function traverseDirectory(currentPath, handleCompletion) {
            fs.readdir(currentPath, (err, items) => {
                if (err) return handleCompletion(err);
                let pending = items.length;
                if (pending === 0) return handleCompletion();
                items.forEach(item => {
                    const fullPath = path.join(currentPath, item);
                    fs.stat(fullPath, (err, stats) => {
                        if (err) return handleCompletion(err);
                        if (stats.isDirectory()) {
                            traverseDirectory(fullPath, (err, res) => {
                                if (err) return handleCompletion(err);
                                result.push(...res.map(p => path.join(fullPath, p)))
                                pending -= 1;
                                if (pending === 0) handleCompletion();
                            });
                        } else {
                            result.push(fullPath);
                            pending -= 1;
                            if (pending === 0) handleCompletion();
                        }
                    });
                });
            });
        }

        traverseDirectory(dirPath, callback);
    });
}
