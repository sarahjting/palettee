const palettee = require("../index");

document.getElementById("generate").onclick = refresh;

function refresh() {
    let palettes = "";
    for(let i = 0; i < 50; i ++) {
        const colors = palettee.palette({
            size: 5,
            format: "palettee",
        });
        palettes += `<div class="palette">`
            + colors.hex().reduce((a,b) => a + `<div class="palette-color" style="background-color:${b}"><span>${b}</span></div>`, '')
            + `<div class="palette-scheme">${colors.scheme}</div>`
            + `</div>`;
    }
    document.getElementById("results").innerHTML = palettes;
}

refresh();