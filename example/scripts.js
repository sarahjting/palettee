const Palettee = require("../index");

const select = document.getElementById("form-select");
for(let i = 1; i <= 10; i ++) {
    select.innerHTML += `<option ${i == 5 ? 'selected' : ''}>${i}</option>`;
}

const filters = document.getElementById("form-filters");
Palettee.schemes.forEach(scheme => {
    filters.innerHTML += `<label><input type="checkbox" value="${scheme}" class="form-filter" checked/><span>${scheme}</span></label>`
});


document.getElementById("generate").onclick = refresh;

function refresh() {
    let palettes = "";
    const palettee = new Palettee({
        size: Number(select.value),
        scheme: Array.from(document.getElementsByClassName('form-filter')).filter(x=>x.checked).map(x=>x.value),
        format: "palettee",
    });
    for(let i = 0; i < 50; i ++) {
        const colors = palettee.palette();
        palettes += `<div class="palette">`
            + colors.hex().reduce((a,b) => a + `<div class="palette-color" style="background-color:${b}"><span>${b}</span></div>`, '')
            + `<div class="palette-scheme">${colors.scheme}</div>`
            + `</div>`;
    }

    const buttonPalette = palettee.palette({format: "palettee", size: 3, scheme: "contrast"});
    document.getElementById("form").style.backgroundColor = buttonPalette.colors[1].hex;
    document.getElementById("form").style.color = buttonPalette.colors[2].hex;
    document.getElementById("generate").style.backgroundColor = buttonPalette.colors[0].hex;
    document.getElementById("generate").style.color = buttonPalette.colors[2].hex;
    document.getElementById("generate").style.borderColor = buttonPalette.colors[2].hex;

    document.getElementById("results").innerHTML = palettes;
}

refresh();