const assert = require('assert');
const { join } = require('path');
const KeysStorage = require('../keys');


describe('KeysStorage', function() {
    /**
     * @type KeysStorage
     */
    let keys;

    before(() => {
        keys = new KeysStorage(join(__dirname, 'assets'));
    });

    it('should return all key folders in raw', async () => {
        assert.deepEqual(await keys.getRawList(), ['school_10', 'school_11']);
    });

    it('should support legacy key', async () => {
        const key = await keys.getKeyByName('school_10');

        assert.equal(key.name, 'school_10');
        assert.equal(key.isLegacy, true);
        assert.equal(key.readableName, 'school_10');
    });

    it('should resolve key object by right name', async () => {
        const key = await keys.getKeyByName('school_11');

        assert.equal(key.name, 'school_11');
        assert.equal(key.isLegacy, false);
        assert.equal(key.readableName, 'Школа 11');
    });

    it('should return available parts for key', async () => {
        const parts = await keys.getParts('school_11');
        assert.deepEqual(parts, ['client.crt', 'client.key']);
    });

    it('should return part by index', async () => {
        const part0 = await keys.loadPart('school_11', 0);
        assert.equal(part0.name, 'client.crt');
        assert.equal(part0.data.length, 5422);

        const part1 = await keys.loadPart('school_11', 1);
        assert.equal(part1.name, 'client.key');
        assert.equal(part1.data.length, 1707);
    });

    it('should create a new key', () => {
    });

    it('should save the key', () => {
    });

    it('should delete the key', () => {
    });
});