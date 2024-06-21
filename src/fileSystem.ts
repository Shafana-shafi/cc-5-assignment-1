/**
 * Represents a file system with folders and files.
 */
class FileSystem {
  /**
   * The root folder of the file system.
   */
  root: Folder;

  /**
   * Constructs a new instance of FileSystem with a root folder.
   */
  constructor() {
    this.root = new Folder('');
  }

  /**
   * Creates a file or folder at the specified path.
   * If a file is created, returns the created File object.
   * If a folder is created, returns the created Folder object.
   * Returns undefined if creation fails.
   * 
   * @param {string} path - The path where the file or folder should be created.
   * @param {number} [size] - Optional size of the file (applicable if creating a file).
   * @returns {File | Folder | undefined} The created File or Folder object, or undefined if creation fails.
   */
  createFileOrFolder(path: string, size?: number): File | Folder | undefined {
    path = this.normalizePath(path);
    const pathParts = path.split('/').filter(Boolean);
    let currentFolder = this.root;

    for (let i = 0; i < pathParts.length; i++) {
      const segment = pathParts[i];
      const isLastSegment = i === pathParts.length - 1;

      if (isLastSegment) {
        if (size !== undefined) {
          const newFile = new File(segment, size, currentFolder);
          currentFolder.files.push(newFile);
          return newFile;
        } else {
          const newFolder = new Folder(segment, currentFolder);
          currentFolder.folders.push(newFolder);
          return newFolder;
        }
      } else {
        let nextFolder = currentFolder.folders.find(f => f.name === segment);
        if (!nextFolder) {
          nextFolder = new Folder(segment, currentFolder);
          currentFolder.folders.push(nextFolder);
        }
        currentFolder = nextFolder;
      }
    }
    return undefined;
  }

  /**
   * Normalizes the given path by removing redundant slashes and ensuring it starts with a '/'.
   * 
   * @param {string} path - The path to normalize.
   * @returns {string} The normalized path.
   * @private
   */
  private normalizePath(path: string): string {
    return '/' + path.split('/').filter(Boolean).join('/');
  }
}

/**
 * Represents a folder in a file system.
 */
class Folder {
  name: string;
  parent: Folder | null;
  folders: Folder[];
  files: File[];
  /**
   * Constructs a new instance of Folder with a given name and optional parent folder.
   * 
   * @param {string} name - The name of the folder.
   * @param {Folder | null} [parent=null] - The parent folder of this folder. Null for the root folder.
   */
  constructor(name: string, parent: Folder | null = null) {
    this.name = name;
    this.parent = parent;
    this.folders = [];
    this.files = [];
  }

  /**
   * Returns the full path of the folder within the file system.
   * 
   * @returns {string} The full path of the folder.
   */
  get path(): string {
    return this.parent ? `${this.parent.path}/${this.name}` : '';
  }

  /**
   * Recursively calculates the total size of the folder, including all subfolders and files.
   * 
   * @returns {number} The total size of the folder.
   */
  getSize(): number {
    return this.folders.reduce((sum, folder) => sum + folder.getSize(), 0) +
           this.files.reduce((sum, file) => sum + file.getSize(), 0);
  }

  /**
   * Finds and returns the folder located at the specified path relative to this folder.
   * 
   * @param {string} path - The relative path of the folder to find.
   * @returns {Folder | undefined} The found Folder object, or undefined if not found.
   */
  findFolder(path: string): Folder | undefined {
    path = this.normalizePath(path);
    const segments = path.split('/').filter(Boolean);
    let currentFolder: Folder | undefined = this;

    for (const segment of segments) {
      if (!currentFolder) return undefined;
      currentFolder = currentFolder.folders.find(f => f.name === segment);
    }
    return currentFolder;
  }

  /**
   * Normalizes the given path by removing redundant slashes and ensuring it starts with a '/'.
   * 
   * @param {string} path - The path to normalize.
   * @returns {string} The normalized path.
   * @private
   */
  private normalizePath(path: string): string {
    return '/' + path.split('/').filter(Boolean).join('/');
  }
}

/**
 * Represents a file in a file system.
 */
class File {
  /**
   * The name of the file.
   */
  name: string;

  /**
   * The size of the file in bytes.
   */
  size: number;

  /**
   * The parent folder that contains this file.
   */
  parent: Folder;

  /**
   * Constructs a new instance of File with a given name, size, and parent folder.
   * 
   * @param {string} name - The name of the file.
   * @param {number} size - The size of the file in bytes.
   * @param {Folder} parent - The parent folder that contains this file.
   */
  constructor(name: string, size: number, parent: Folder) {
    this.name = name;
    this.size = size;
    this.parent = parent;
  }

  /**
   * Returns the size of the file in bytes.
   * 
   * @returns {number} The size of the file.
   */
  getSize(): number {
    return this.size;
  }

  /**
   * Returns the full path of the file within the file system.
   * 
   * @returns {string} The full path of the file.
   */
  getPath(): string {
    return `${this.parent.path}/${this.name}`;
  }
}

export { FileSystem, Folder, File };
