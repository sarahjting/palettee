const utils = require("./utils");

class Color {
    constructor(value) {
        if(Array.isArray(value)) {
            this.color = value;
        } else {
            this.color = utils.toHsv(value);
        }
    }
    get hsv() {
        return this.color;
    }
    get h() {
        return this.color[0];
    }
    get s() {
        return this.color[1];
    }
    get v() {
        return this.color[2];
    }
    get hex() {
        return utils.hsvToHex(this.color);
    }

    static generateRandom() {
        return new Color([
            Math.floor(Math.random() * 360),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
        ]);
    }
    static generateComplement(seed, variation = 10) {
        return new Color([
            Math.floor(Math.random() * 360),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
        ]);
    }
}

module.exports = Color;
module.exports.default = Color;