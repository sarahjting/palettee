const expect = require('chai').expect;
const palettee = require("../index");
const Palette = require("../src/palettes/Palette");

describe('palettes generator', () => {
    it('should be an array of colors', () => {
        expect(palettee.palette()).to.be.an('array');
    });
});