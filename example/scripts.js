const palettee = require("../index");

document.getElementById("generate").onclick = refresh;

function refresh() {
    let palettes = "";
    for(let i = 0; i < 100; i ++) {
        const colors = palettee.palette(5);
        palettes += `<div class="palette">`
            + colors.reduce((a,b) => a + `<div class="palette-color" style="background-color:${b}"><span>${b}</span></div>`, '')
            + `</div>`;
    }
    document.getElementById("results").innerHTML = palettes;
}

refresh();