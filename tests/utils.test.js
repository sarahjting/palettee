const expect = require('chai').expect;
const colorcolor = require("colorcolor");
const utils = require("../src/utils");

describe('utils', () => {
    const hex2Hsv = {
        "#ffffff": [0, 0, 100],
        "#000000":[0, 0, 0],
        "#ff0000":[0, 100, 100],
        "#00ff00":[120, 100, 100],
        "#0000ff":[240, 100, 100],
    };
    it('should convert a hex input into hsl', () => {
        Object.keys(hex2Hsv).forEach((x) => {
            expect(utils.toHsv(x)).to.deep.equal(hex2Hsv[x]);
        });
    });
    it('should convert hsl into hex', () => {
        Object.keys(hex2Hsv).forEach((x) => {
            expect(utils.hsvToHex(hex2Hsv[x])).to.deep.equal(x);
        });
    });
});