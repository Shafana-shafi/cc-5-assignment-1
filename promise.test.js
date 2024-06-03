import fs from 'fs';
import path from 'path';
import { promisifiedFsStat, promisifiedFsReadDir, findSizePromisified, getInformationOfPersonWithId3, getInformationOfPeoplewithId123 } from "./src/promise"

describe('Tests for functions based on promise ', () => {
    const testDir = path.join(__dirname, 'testDir');
    const testFile = path.join(testDir, 'testFile.txt');
    const nestedDir = path.join(testDir, 'nestedDir');
    const nestedFile = path.join(nestedDir, 'nestedFile.txt');

    beforeAll(async () => {
        fs.mkdirSync(testDir);
        fs.writeFileSync(testFile, 'welcome');
        fs.mkdirSync(nestedDir);
        fs.writeFileSync(nestedFile, 'Welcome to promise world');
    });

    afterAll(async () => {
        fs.unlinkSync(nestedFile);
        fs.rmdirSync(nestedDir);
        fs.unlinkSync(testFile);
        fs.rmdirSync(testDir);
    });

    test('promisifiedFsStat should return file stats', async () => {
        const stats = await promisifiedFsStat(testFile);
        expect(stats.isFile()).toBe(true);
    });

    test('promisifiedFsReadDir should return directory contents', async () => {
        const files = await promisifiedFsReadDir(testDir);
        expect(files).toContain('testFile.txt');
        expect(files).toContain('nestedDir');
    });

    test('findSizePromisified should return file size', async () => {
        const size = await findSizePromisified(testFile);
        expect(size).toBe(Buffer.byteLength('welcome'));
    });

    test('findSizePromisified should return directory size', async () => {
        const size = await findSizePromisified(testDir);
        const expectedSize = Buffer.byteLength('welcome') + Buffer.byteLength('Welcome to promise world');
        expect(size).toBe(expectedSize);
    });

    test('Test for getInformationOfPersonWithId3', async () => {
        try {
            const informationOfPersonWithId3 = await getInformationOfPersonWithId3();
            expect(informationOfPersonWithId3).toStrictEqual({
                "name": "R2-D2",
                "height": "96",
                "mass": "32",
                "hair_color": "n/a",
                "skin_color": "white, blue",
                "eye_color": "red",
                "birth_year": "33BBY",
                "gender": "n/a",
                "homeworld": "https://swapi.dev/api/planets/8/",
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "species": [
                    "https://swapi.dev/api/species/2/"
                ],
                "vehicles": [],
                "starships": [],
                "created": "2014-12-10T15:11:50.376000Z",
                "edited": "2014-12-20T21:17:50.311000Z",
                "url": "https://swapi.dev/api/people/3/"
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    });

    test('Test for getInformationOfPeoplewithId123', async () => {
        try {
            const namesArrayOfPeopleWithId123 = await getInformationOfPeoplewithId123();
            expect(namesArrayOfPeopleWithId123).toStrictEqual(['Luke Skywalker', 'C-3PO', 'R2-D2']);
        }
        catch (error) {
            console.log('Error', error.message);
        }
    })
});
