const Color = require("./Color");
const MonochromePalette = require('./palettes/MonochromePalette');

class Palettee {
    palette() {
        const palette = new MonochromePalette();
        return palette.generate().hex();
    }

    static get schemes() {
        return [
            "Monochrome",
        ];
    }
}

module.exports = Palettee;
module.exports.default = Palettee;
