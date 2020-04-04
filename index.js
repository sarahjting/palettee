const colorcolor = require("colorcolor");

function Palettee() {
    this.colors = [];
}

Palettee.prototype.randomColor = function color() {

}

Palettee.prototype.palette = function palette() {
    return ["#ff0000", "#00ff00", "#0000ff"];
}

const palettee = new Palettee();
module.exports = palettee;
module.exports.default = palettee;