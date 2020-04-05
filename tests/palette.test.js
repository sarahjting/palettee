const expect = require('chai').expect;
const MonochromePalette = require("../src/palettes/MonochromePalette");

describe('palettes', () => {
    it('should instantiate', () => {
        expect(new MonochromePalette()).to.be.instanceOf(MonochromePalette);
    });
    it('should generate a palette of colors', () => {
        const palette = new MonochromePalette();
        const hexes = palette.generate().hex();
        expect(hexes).to.be.an('array');
    });
});