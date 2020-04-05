const utils = require("./utils");

class Color {
    constructor(value) {
        this.color = [0, 0, 0];
        if(Array.isArray(value)) {
            [this.h, this.s, this.v] = value;
        } else {
            this.color = utils.toHsv(value);
        }
    }
    get hsv() {
        return this.color;
    }
    set h(value) {
        if(value > 360) value -= 360;
        if(value < 0) value += 360;
        this.color[0] = Math.floor(value);
    }
    get h() {
        return this.color[0];
    }
    set s(value) {
        this.color[1] = Math.max(0, Math.min(100, Math.floor(value)));
    }
    get s() {
        return this.color[1];
    }
    set v(value) {
        this.color[2] = Math.max(0, Math.min(100, Math.floor(value)));
    }
    get v() {
        return this.color[2];
    }
    get hex() {
        return utils.hsvToHex(this.color);
    }

    clone() {
        return new Color(this.color);
    }

    static generateRandom() {
        return new Color([
            Math.random() * 360,
            Math.random() * 100,
            Math.random() * 100,
        ]);
    }
    static generateComplement(seed, variation = 0) {
        return new Color([
            seed.h + 180 + (Math.random() * variation * 2 - variation),
            seed.s,
            seed.v,
        ]);
    }
}

module.exports = Color;
module.exports.default = Color;