const expect = require('chai').expect;
const palettee = require("../index");
const Color = require("../src/Color");
const Palette = require("../src/palettes/Palette");

describe('palettee', () => {
    it('should initialise a default options object', () => {
        expect(palettee.options).to.be.an('object');
        expect(palettee.options.size).to.be.a('number');
        expect(palettee.options.scheme).to.be.an('array');
        expect(palettee.options.format).to.be.a('string');
    });
    describe("palette generator with default settings", () => {
        const results = palettee.palette();
        it('should generate an array', () => {
            expect(results).to.be.an('array');
        });
        it('should generate an array of hex colors', () => {
            expect(results[0]).to.be.a('string');
            expect(results[0].length).to.equal(7);
            expect(results[0][0]).to.equal('#');
        });
        it('should generate an array of 5 colors', () => {
            expect(results.length).to.equal(5);
        });
    });
    describe("palette generator with size settings", () => {
        it('should take size as default option', () => {
            for(let i = 1; i <= 10; i ++) {
                const results = palettee.palette(i);
                expect(results).to.be.an('array');
                expect(results.length).to.equal(i);
            }
        });
        it('should take size as an option in an object', () => {
            for(let i = 1; i <= 10; i ++) {
                const results = palettee.palette({size: i});
                expect(results).to.be.an('array');
                expect(results.length).to.equal(i);
            }
        });
        it('should throw an error for invalid sizes', () => {
            expect(() => palettee.palette({size: -1})).to.throw("Invalid size argument provided.");
            expect(() => palettee.palette({size: 0})).to.throw("Invalid size argument provided.");
        });
    });
    describe("palette generator with scheme settings", () => {
        it('should take scheme as a string', () => {
            const results = palettee.palette({scheme: "monochrome"});
            expect(results).to.be.an('array');
        });
        it('should take scheme as an array', () => {
            const results = palettee.palette({scheme: ["monochrome"]});
            expect(results).to.be.an('array');
        });
        it('should take multiple schemes as an array', () => {
            const results = palettee.palette({scheme: ["monochrome", "complementary-contrast"]});
            expect(results).to.be.an('array');
        });
        it('should throw an error for invalid schemes', () => {
            expect(() => palettee.palette({scheme: "foo"})).to.throw(`Invalid scheme "foo" provided.`);
            expect(() => palettee.palette({scheme: ["foo"]})).to.throw(`Invalid scheme "foo" provided.`);
            expect(() => palettee.palette({scheme: ["monochrome", "foo", "complementary-contrast"]})).to.throw(`Invalid scheme "foo" provided.`);
        });
    });
    describe("palette generator with format", () => {
        it('should return hex format', () => {
            const results = palettee.palette({format: "hex"});
            expect(results).to.be.an('array');
            expect(results[0]).to.be.a('string');
            expect(results[0].length).to.equal(7);
            expect(results[0][0]).to.equal('#');
        });
        it('should return palette format', () => {
            const results = palettee.palette({format: "palette"});
            expect(results).to.be.instanceOf(Palette);
        });
    });
});