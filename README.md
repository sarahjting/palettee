# palettee
Generates a random colour palette.

Still a work in progress!

# Usage
``` 
const palettee = require("palettee"); 

const palette = palettee.palette();
// ["#000000", "#000000", "#000000", "#000000", "#000000"]

const color = palettee.palette(3);
// ["#000000", "#000000", "#000000"]

const color = palettee.palette({
    scheme: ["monochrome", "complementary-contrast", "complementary-gradient"],
    size: 5,
    format: "hex",
});
// ["#000000", "#000000", "#000000", "#000000", "#000000"]

const color = palettee.color();
// "#000000"
```