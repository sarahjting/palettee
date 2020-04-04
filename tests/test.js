const expect = require('chai').expect;
const palettee = require("../index");

describe('Testing printMsg function, should return "Hello World!" ', () => {
    it('Should Return Hello World!', () => {
        expect(palettee.generate()).to.equal("Hello World!");
    });
});