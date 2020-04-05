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
});