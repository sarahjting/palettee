const Palette = require('./Palette');
const Color = require('../Color');

class ContrastPalette extends Palette {
    /**
     * Constructs a Palette.
     * @param size
     */
    constructor(size) {
        super(size);
        this.scheme = "contrast";
    }

    /**
     * Generates random colors for the Palette.
     * @param size
     */
    generate(seed = null) {
        if(seed === null) seed = Color.generateSeed();

        const left = seed.clone();
        left.v += Math.random() * 50;
        left.s = Math.random() * 100;
        const right = seed.clone();
        right.v = Math.random() * 20;
        right.s = Math.random() * 100;

        const complement = Color.generateComplement(seed, 30);
        complement.v = Math.random() * 50 + 50;
        complement.s += Math.random() * 50;
        const complementRight = complement.clone();
        complementRight.v -= Math.random() * 40 + 10;
        complementRight.s += Math.random() * 40 - 20;

        const pivotIndex = Math.floor(Math.random() * ((this.size - 2)/2)) + Math.ceil(this.size / 2);
        this.colors = [
            ... this.range(pivotIndex, left, right),
            ... this.range(this.size - pivotIndex, complement, complementRight)
        ];

        return this;
    }
}

module.exports = ContrastPalette;
module.exports.default = ContrastPalette;