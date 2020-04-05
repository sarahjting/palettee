const Palette = require('./Palette');
const Color = require('../Color');

class ComplementaryGradient extends Palette {
    constructor(size) {
        super(size);
    }
    generate(seed = null) {
        if(seed === null) seed = Color.generateSeed();

        // randomise gradient

        // get left color
        const left = seed.clone();
        left.v += Math.random() * 50;
        left.s = Math.random() * 100;

        // get right color
        const right = seed.clone();
        right.v = Math.random() * 20;
        right.s = Math.random() * 100;

        const complement = Color.generateComplement(seed, 60);
        complement.v += Math.random() * 50;
        this.colors = [
                ... this.range(this.size - 1, left, right),
                complement
            ];

        return this;
    }
}

module.exports = ComplementaryGradient;
module.exports.default = ComplementaryGradient;