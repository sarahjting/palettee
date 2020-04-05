const expect = require('chai').expect;
const Color = require("../src/Color");

describe('color', () => {
    it('should take a hex input', () => {
        const color = new Color("#ffffff");
        expect(color.hsv).to.deep.equal([0, 0, 100]);
    });
    it('should take a hsv input', () => {
        const color = new Color([0, 0, 100]);
        expect(color.hsv).to.deep.equal([0, 0, 100]);
    });
    it('should output hex', () => {
        const color = new Color([0, 0, 100]);
        expect(color.hex).to.deep.equal("#ffffff");
    });
    it('should generate a random color', () => {
        const color = Color.generateRandom();
        expect(color).to.be.an.instanceof(Color);
    });
    it('should generate a complementary color', () => {
        const color = Color.generateRandom();
        const complement = Color.generateComplement(color);
        expect(Math.abs(complement.h - color.h)).to.equal(180);
    });
    it('should identify light colors', () => {
        const color = new Color([0, 0, 100]);
        expect(color.isLight()).to.be.true;
        expect(color.isDark()).to.be.false;
    });
    it('should identify dark colors', () => {
        const color = new Color([0, 0, 0]);
        expect(color.isLight()).to.be.false;
        expect(color.isDark()).to.be.true;
    });
});