class Key {
  constructor(name, meta) {
    this.name = name;
    this.meta = meta;

    this.isLegacy = !this.meta;
    this.readableName = this.isLegacy ? this.name : this.meta.name;
  }
}

module.exports = Key;
