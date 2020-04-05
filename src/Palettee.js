const Color = require("./Color");
const MonochromePalette = require('./palettes/MonochromePalette');
const ContrastPalette = require('./palettes/ContrastPalette');
const GradientPalette = require('./palettes/GradientPalette');

class Palettee {
    constructor(inOptions = {}) {
        this.options = {
            size: 5,
            scheme: Palettee.schemes,
            format: "hex",
        }
        this.options = this.loadOptions(inOptions);
    }

    loadOptions(inOptions) {
        const options = {...this.options};

        if(typeof inOptions === "number") {
            inOptions = {size: inOptions};
        } else if(typeof inOptions !== "object") {
            throw new TypeError("Invalid options argument provided.")
        }

        if(inOptions.size !== undefined) {
            if(typeof inOptions.size !== "number" || inOptions.size < 1) {
                throw new TypeError("Invalid size argument provided.");
            }
            options.size = inOptions.size;
        }

        if(inOptions.scheme !== undefined) {
            if(typeof inOptions.scheme === "string") {
                inOptions.scheme = [inOptions.scheme];
            }
            if(!Array.isArray(inOptions.scheme) || inOptions.scheme.length < 1) {
                throw new TypeError("Invalid scheme argument provided.");
            }
            inOptions.scheme.forEach(scheme => {
                if(!Palettee.schemes.includes(scheme)) {
                    throw new TypeError(`Invalid scheme "${scheme}" provided.`);
                }
            })
            options.scheme = inOptions.scheme;
        }

        if(inOptions.format !== undefined) {
            if(!Palettee.formats.includes(inOptions.format)) {
                throw new TypeError("Invalid format argument provided.");
            }
            options.format = inOptions.format;
        }

        return options;
    }

    palette(options = {}) {
        let palette = null;

        options = this.loadOptions(options);
        const scheme = options.scheme[Math.floor(Math.random() * options.scheme.length)];

        if(scheme === "monochrome") {
            palette = new MonochromePalette(options.size).generate();
        } else if(scheme === "contrast") {
            palette = new ContrastPalette(options.size).generate();
        } else if(scheme === "gradient") {
            palette = new GradientPalette(options.size).generate(2);
        } else if(scheme === "gradient-trio") {
            palette = new GradientPalette(options.size).generate(3);
        } else if(scheme === "gradient-multi") {
            palette = new GradientPalette(options.size).generate(0);
        } else {
            throw new Error("Invalid scheme provided for palette generation.");
        }

        if(options.format === "hex") {
            return palette.hex();
        } else if(options.format === "palette") {
            return palette;
        }
    }

    static get schemes() {
        return [
            "monochrome",
            "contrast",
            "gradient",
            "gradient-trio",
            "gradient-multi",
        ];
    }
    static get formats() {
        return [
            "hex",
            "palette"
        ];
    }
}

module.exports = Palettee;
module.exports.default = Palettee;
