const path = require('path');
const fs = require('fs').promises;
const Key = require('./Key');


class KeysStorage {
  constructor(rootDir) {
    this.rootDir = rootDir;
  }

  /**
     * @param {string|Key} data
     */
  resolveFullpath(data) {
    return path.join(this.rootDir, typeof data === 'string' ? data : data.name);
  }

  resolveMetaFullpath(data) {
    return path.join(this.resolveFullpath(data), '$meta.json');
  }

  async getRawList() {
    const files = await fs.readdir(this.rootDir, { withFileTypes: true });
    return files.filter(d => d.isDirectory()).map(d => d.name);
  }

  async getKeyList() {
    const rawList = await this.getRawList();
    return Promise.all(rawList.map(f => this.getKeyByName(f)));
  }

  /**
     * @param {string} name
     * @returns {Key}
     */
  async getKeyByName(name) {
    const pathToMeta = this.resolveMetaFullpath(name);
    let meta = null;
    try {
      meta = JSON.parse(await fs.readFile(pathToMeta));
    } catch (err) {
      console.warn(`Cannot open '$meta.json' for '${name}'`);
    }

    return new Key(name, meta);
  }

  /**
     * @param {string|Key} key
     */
  async getParts(key) {
    const rawParts = await fs.readdir(this.resolveFullpath(key), { withFileTypes: true });
    const parts = rawParts
      .filter(d => d.isFile() && !d.name.endsWith('.json'))
      .map(d => d.name);
    return parts;
  }

  /**
     * @param {string|Key} key
     * @param {number} index
     */
  async loadPart(key, index) {
    const parts = await this.getParts(key);
    if (index < 0 || index >= parts.length) {
      throw new RangeError(`wrong index: ${index}; parts available: ${parts.length}`);
    }

    const name = parts[index];
    const fullpath = path.join(this.resolveFullpath(key), name);
    return {
      name,
      data: await fs.readFile(fullpath),
    };
  }
}

module.exports = KeysStorage;
