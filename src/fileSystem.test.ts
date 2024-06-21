import { FileSystem, Folder, File } from './fileSystem'

describe('FileSystem', () => {
  let fs: FileSystem;

  beforeEach(() => {
    fs = new FileSystem();
  });

  test('should create a folder at the root level', () => {
    const newFolder = fs.createFileOrFolder('/test-folder');
    expect(newFolder).toBeInstanceOf(Folder);
    expect(newFolder?.path).toEqual('/test-folder');
  });

  test('should create a nested folder', () => {
    fs.createFileOrFolder('/test-folder');
    const nestedFolder = fs.createFileOrFolder('/test-folder/nested-folder');
    expect(nestedFolder).toBeInstanceOf(Folder);
    expect(nestedFolder?.path).toEqual('/test-folder/nested-folder');
  });

  test('should create a file at the root level', () => {
    const newFile = fs.createFileOrFolder('/test-file.txt', 100) as File;
    expect(newFile?.getSize()).toEqual(100);
    expect(newFile?.getPath()).toEqual('/test-file.txt');
  });

  test('should create a nested file', () => {
    fs.createFileOrFolder('/test-folder');
    const nestedFile = fs.createFileOrFolder('/test-folder/nested-file.txt', 200) as File;
    expect(nestedFile?.getSize()).toEqual(200);
    expect(nestedFile?.getPath()).toEqual('/test-folder/nested-file.txt');
  });

  test('should calculate the size of a folder correctly', () => {
    fs.createFileOrFolder('/test-folder');
    fs.createFileOrFolder('/test-folder/file1.txt', 100);
    fs.createFileOrFolder('/test-folder/file2.txt', 200);
    const folder = fs.root.findFolder('/test-folder');
    expect(folder?.getSize()).toEqual(300);
  });

  test('should calculate the size of nested folders correctly', () => {
    fs.createFileOrFolder('/folder1');
    fs.createFileOrFolder('/folder1/folder2');
    fs.createFileOrFolder('/folder1/folder2/file1.txt', 100);
    fs.createFileOrFolder('/folder1/file2.txt', 200);
    const folder = fs.root.findFolder('/folder1');
    expect(folder?.getSize()).toEqual(300);
  });

  test('should find a folder by its path', () => {
    fs.createFileOrFolder('/folder1');
    fs.createFileOrFolder('/folder1/folder2');
    const folder = fs.root.findFolder('/folder1/folder2');
    expect(folder).toBeInstanceOf(Folder);
    expect(folder?.path).toEqual('/folder1/folder2');
  });

  test('should return undefined for non-existent folders', () => {
    const folder = fs.root.findFolder('/non-existent-folder');
    expect(folder).toBeUndefined();
  });
});
