const colorcolor = require("colorcolor");

module.exports = {
    hsvToHex: (hsv) => {
        return colorcolor(`hsv(${hsv[0]}, ${hsv[1] * 100}%, ${hsv[2] * 100}%)`, "hex");
    },
    toHsv: (input) => {
        return colorcolor(input, "hsv")
            .slice(4, -1)
            .split(',')
            .map(x => Number(x.slice(-1) == '%' ? x.slice(0, -1) / 100 : x));
    }
};