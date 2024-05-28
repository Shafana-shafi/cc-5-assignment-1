import fs from 'fs';
import path from 'path';

/**
 * Synchronously gets the size of a file or folder.
 * @param {string} filePath - The path to the file or folder.
 * @returns {number} - The size of the file or folder in bytes.
 */
export const getFileOrFolderSizeSync = (filePath) => {
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
        return stats.size;
    }
    if (stats.isDirectory()) {
        const files = fs.readdirSync(filePath);
        return files.reduce((accumulatedSize, file) => {
            const fullPath = path.join(filePath, file);
            const fileStats = fs.statSync(fullPath);
            return accumulatedSize + fileStats.size;
        }, 0);
    }
};

/**
 * Asynchronously gets the size of a file or folder.
 * @param {string} filePath - The path to the file or folder.
 * @param {function} callback - The callback function (err, size).
 */
export const getSizeOfFileOrFolderAsync = (filePath, callback) => {
    fs.stat(filePath, (err, stats) => {
        if (err) {
            return callback(err);
        }
        if (stats.isFile()) {
            return callback(null, stats.size);
        }
        if (stats.isDirectory()) {
            fs.readdir(filePath, (err, files) => {
                if (err) {
                    return callback(err);
                }
                let totalSize = 0;
                let completed = 0;
                if (files.length === 0) {
                    return callback(null, totalSize);
                }
                files.forEach(file => {
                    const fullPath = path.join(filePath, file);
                    fs.stat(fullPath, (err, fileStats) => {
                        if (err) {
                            return callback(err);
                        }
                        totalSize += fileStats.size;
                        completed += 1;
                        if (completed === files.length) {
                            callback(null, totalSize);
                        }
                    });
                });
            });
        }
    });
};
