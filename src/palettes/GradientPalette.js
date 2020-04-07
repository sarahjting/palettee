const Palette = require('./Palette');
const Color = require('../Color');

class GradientPalette extends Palette {
    /**
     * Constructs a Palette.
     * @param size
     */
    constructor(size) {
        super(size);
        this.scheme = "gradient";
    }

    /**
     * Generates random colors for the Palette.
     * @param size
     */
    generate(number = 0) {
        if(number === 0) {
            number = Math.floor(Math.random() * (Math.floor(this.size/3))) + 2;
        }
        if(number > 2) {
            this.scheme = "gradient-multi";
        }

        const gradientStops = [];
        for(let i = 0; i < number; i ++) {
            gradientStops.push(Color.generateRandom());
        }
        gradientStops.sort((a, b) => a.h > b.h);

        for(let i = 1; i < number; i ++) {
            const gradient = this.range(Math.floor((this.size - this.colors.length) / (number - i)), gradientStops[i - 1], gradientStops[i]);
            for(let i = 0; i < gradient.length; i ++) this.colors.push(gradient[i]);
        }

        return this;
    }
}

module.exports = GradientPalette;
module.exports.default = GradientPalette;