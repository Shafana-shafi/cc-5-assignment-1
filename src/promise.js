import fs from 'fs'
import fetch from 'node-fetch';

/**
 * Promisified function to get the status of a file or directory.
 *
 * @param {string} fileOrDirectoryPath - The path to the file or directory.
 * @returns {Promise<fs.Stats>} - A promise that resolves with the stats of the file or directory.
 */
export function promisifiedFsStat(fileOrDirectoryPath) {
    return new Promise((resolve, reject) => {
        fs.stat(fileOrDirectoryPath, (err, stats) => {
            if (err) {
                reject(err);
            } else {
                resolve(stats);
            }
        });
    });
}

/**
 * Promisified function to read the contents of a directory.
 *
 * @param {string} fileOrDirectoryPath - The path to the directory.
 * @returns {Promise<string[]>} - A promise that resolves with an array of file names in the directory.
 */
export function promisifiedFsReadDir(fileOrDirectoryPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(fileOrDirectoryPath, (err, files) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(files);
            }
        })

    })
}

/**
 * Function to find the size of a file using a promisified stat function.
 *
 * @param {string} filePath - The path to the file.
 * @returns {Promise<number>} - A promise that resolves with the size of the file in bytes.
 */
export async function findSizePromisified(filePath) {
    const stats = await promisifiedFsStat(filePath);
    if (stats.isFile()) {
        return stats.size;
    }
    if (stats.isDirectory()) {
        const files = await promisifiedFsReadDir(filePath);
        const arrayOfFileSize = await Promise.all(
            files.map(file => findSizePromisified(`${filePath}/${file}`))
        );
        return arrayOfFileSize.reduce((accmulatedSize, currentFileSize) => accmulatedSize + currentFileSize, 0);
    }
    return 0;
}

/**
 * Fetches and returns the name of the person with ID 3.
 * @returns {Promise<string>} The name of the person with ID 3.
 * @throws Will throw an error if the network response is not ok.
 */
export async function getInformationOfPersonWithId3() {
    const url = "https://swapi.dev/api/people/3/";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error');
    }
}

/**
 * Fetches and returns the name of the person with the given ID.
 * @param {number} personId - The ID of the person to fetch information for.
 * @returns {Promise<string>} The name of the person with the given ID.
 * @throws Will throw an error if the network response is not ok.
 */
export async function getInformationOfPerson(personId) {
    const baseUrl = "https://swapi.dev/api/people/";
    const url = `${baseUrl}/${personId}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error');
        }
        const data = await response.json();
        return data.name;
    } catch (error) {
        throw new Error('Error');
    }
}

/**
 * Fetches and returns the names of the people with IDs 1, 2, and 3.
 * @returns {Promise<string[]>} An array of names of the people with IDs 1, 2, and 3.
 * @throws Will throw an error if there is a network issue fetching any of the people.
 */
export async function getInformationOfPeoplewithId123() {
    const personIds = [1, 2, 3];
    try {
        const result = await Promise.all(personIds.map(id => getInformationOfPerson(id)));
        return result;
    } catch (error) {
        throw new Error('Error')
    }
}
