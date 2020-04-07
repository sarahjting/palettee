const utils = require("./utils");

class Color {
    /**
     * Constructs a Color object.
     * @param value
     */
    constructor(value) {
        this.color = [0, 0, 0];
        if(Array.isArray(value)) {
            [this.h, this.s, this.v] = value;
        } else {
            this.color = utils.toHsv(value);
        }
    }

    /**
     * Gets current color as a hsv array.
     * @returns [number]
     */
    get hsv() {
        return this.color;
    }

    /**
     * Sets current color's hue.
     * @param value
     */
    set h(value) {
        if(value > 360) value -= 360;
        if(value < 0) value += 360;
        this.color[0] = Math.floor(value);
    }

    /**
     * Gets current color's hue.
     * @returns number
     */
    get h() {
        return this.color[0];
    }

    /**
     * Sets current color's saturation.
     * @param value
     */
    set s(value) {
        this.color[1] = Math.max(0, Math.min(100, Math.floor(value)));
    }

    /**
     * Gets current color's saturation.
     * @returns {number}
     */
    get s() {
        return this.color[1];
    }

    /**
     * Sets current color's value.
     * @param value
     */
    set v(value) {
        this.color[2] = Math.max(0, Math.min(100, Math.floor(value)));
    }

    /**
     * Gets current color's value.
     * @returns {number}
     */
    get v() {
        return this.color[2];
    }

    /**
     * Gets current color as a hex string.
     * @returns string
     */
    get hex() {
        return utils.hsvToHex(this.color);
    }

    /**
     * Constructs a new Color of the same color.
     * @returns Color
     */
    clone() {
        return new Color(this.color);
    }

    /**
     * Returns true if the color is dark (value < 50).
     * @returns boolean
     */
    isDark() {
        return this.v < 50;
    }

    /**
     * Returns true if the color is light (value > 50).
     * @returns boolean
     */
    isLight() {
        return !this.isDark();
    }

    /**
     * Generates a random color.
     * @returns Color
     */
    static generateRandom() {
        return new Color([
            Math.random() * 360,
            Math.random() * 100,
            Math.random() * 100,
        ]);
    }

    /**
     * Generates a random color for use as a seed. Color will be brighter on average.
     * @returns Color
     */
    static generateSeed() {
        const seed = Color.generateRandom();
        seed.s += Math.random() * 50; // weight towards brighter colors
        return seed;
    }

    /**
     * Generates a Color of complementary hue for a given color.
     * Random variation of the color is determined by variation.
     * @param seed
     * @param variation
     * @returns Color
     */
    static generateComplement(seed, variation = 0) {
        return new Color([
            seed.h + 180 + (Math.random() * variation * 2 - variation),
            seed.s,
            seed.v,
        ]);
    }
}

module.exports = Color;
module.exports.default = Color;