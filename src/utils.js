const colorcolor = require("colorcolor");

module.exports = {
    hsvToHex: (hsv) => {
        return colorcolor(`hsv(${hsv[0]}, ${hsv[1]}%, ${hsv[2] }%)`, "hex");
    },
    toHsv: (input) => {
        return colorcolor(input, "hsv")
            .slice(4, -1)
            .split(',')
            .map(x => Number(x.replace('%', '')));
    }
};