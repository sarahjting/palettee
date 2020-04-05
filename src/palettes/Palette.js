const Color = require('../Color');

class Palette {
    constructor(size = 5) {
        // https://ilikekillnerds.com/2015/06/abstract-classes-in-javascript/
        if (this.constructor === Palette) {
            throw new TypeError('Abstract class "Palette" cannot be instantiated directly.');
        }
        if (this.generate === undefined) {
            throw new TypeError('Classes extending the Palette abstract class must implement generate().');
        }

        this.size = size;
        this.colors = [];
    }

    /**
     * Returns an array of Colors for a smooth gradient between two Colors.
     * @param size Integer
     * @param startColor Color
     * @param endColor Color
     * @returns {[Color]}
     */
    range(size, startColor, endColor) {
        if(size < 1) return [];
        const result = [];
        let [startH, endH] = [startColor.h, endColor.h];
        if(Math.abs(startH - endH) > 180) {
            if(startH < endH) startH += 360;
            else endH += 360;
        }
        for(let i = 0; i < size; i ++) {
            const stepH = (endH - startH) * i / size + startH;
            result.push(new Color([
                stepH > 360 ? stepH - 360 : stepH,
                (endColor.s - startColor.s) * i / size + startColor.s,
                (endColor.v - startColor.v) * i / size + startColor.v,
            ]));
        }
        return result;
    }

    hex() {
        return this.colors.map(color => color.hex);
    }
}

module.exports = Palette;
module.exports.default = Palette;