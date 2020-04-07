const colorcolor = require("colorcolor");

module.exports = {
    /**
     * Takes a hsv value as an array of numbers [1-360, 1-100, 1-100]
     * and returns a hex color as a string.
     * @param hsv
     * @returns string
     */
    hsvToHex: (hsv) => {
        return colorcolor(`hsv(${hsv[0]}, ${hsv[1]}%, ${hsv[2] }%)`, "hex");
    },

    /**
     * Takes in a color input and converts it to a hsv value as an array of numbers [1-360, 1-100, 1-100].
     * Color input can be anything that colorcolor would accept as an input.
     * @param input
     * @returns [number]
     */
    toHsv: (input) => {
        return colorcolor(input, "hsv")
            .slice(4, -1)
            .split(',')
            .map(x => Number(x.replace('%', '')));
    }
};