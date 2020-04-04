const expect = require('chai').expect;
const palettee = require("../index");

describe('palette generator', () => {
    it('should be an array of colors', () => {
        expect(palettee.palette()).to.be.an('array');
    });
});