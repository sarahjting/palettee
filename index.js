function Palettee() {
    this.colors = [];
}

Palettee.prototype.generate = function generate() {
    return ["#ff0000", "#00ff00", "#0000ff"];
}

const palettee = new Palettee();
module.exports = palettee;
module.exports.default = palettee;