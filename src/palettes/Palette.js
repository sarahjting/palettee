class Palette {
    constructor(size = 5) {
        // https://ilikekillnerds.com/2015/06/abstract-classes-in-javascript/
        if (this.constructor === Palette) {
            throw new TypeError('Abstract class "Palette" cannot be instantiated directly.');
        }
        if (this.generate === undefined) {
            throw new TypeError('Classes extending the Palette abstract class must implement generate().');
        }

        this.size = 5;
        this.colors = [];
    }

    hex() {
        return this.colors.map(color => color.hex);
    }
}

module.exports = Palette;
module.exports.default = Palette;