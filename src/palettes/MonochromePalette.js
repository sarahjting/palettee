const Palette = require('./Palette');
const Color = require('../Color');

class MonochromePalette extends Palette {
    constructor(size) {
        super(size);
    }
    generate(seed = null) {
        if(seed === null) {
            seed = Color.generateRandom();
        }

        // seed is the medium value
        seed.s += Math.random() * 50; // weight towards brighter colors

        // randomise gradient
        let vTilt = Math.random() * 100;
        let sTilt = Math.random() * 100;
        if(Math.round(Math.random())) sTilt *= -1;

        // get left color
        const left = seed.clone();
        left.v += vTilt;
        left.s += sTilt;

        // get right color
        const right = seed.clone();
        right.v -= vTilt;
        right.s -= sTilt;

        this.colors = this.range(this.size, left, right);
        return this;
    }
}

module.exports = MonochromePalette;
module.exports.default = MonochromePalette;