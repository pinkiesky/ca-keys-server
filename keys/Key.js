class Key {
    constructor(name, meta) {
        this.name = name;
        this.meta = meta;
    }

    get readableName() {
        return this.isLegacy ? this.name : this.meta.name;
    }

    get isLegacy() {
        return !this.meta;
    }

    static async loadFromPath(fullpath, name = 'N/D') {
    }
}

module.exports = Key;