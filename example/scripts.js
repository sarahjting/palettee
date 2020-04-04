const palettee = require("../index");

document.getElementById("generate").onclick = refresh;

function refresh() {
    const colors = palettee.generate();
    let palette = `<div class="palette">`
        + colors.reduce((a,b) => a + `<div class="palette-color" style="background-color:${b}">${b}</div>`, '')
        + `</div>`;
    document.getElementById("results").innerHTML = palette;
}

refresh();