class KeyGenerator {
    constructor() {

    }

    async generate(name) {
        return [{
            name: `Key_${Date.now()}.crt`,
            data: `some keys value`,
        }];
    }
}

module.exports = KeyGenerator;