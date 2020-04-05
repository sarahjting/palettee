const Palette = require('./Palette');
const Color = require('../Color');

class MonochromePalette extends Palette {
    generate(seed = null) {
        if(seed === null) {
            seed = Color.generateRandom();
        }
        for(let value = 0; value <= 100; value += 100 / this.size) {
            this.colors.push(new Color([seed.h, seed.s, value]));
        }
        console.log(this.colors);
        return this;
    }
}

module.exports = MonochromePalette;
module.exports.default = MonochromePalette;