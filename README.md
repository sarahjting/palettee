# palettee
Generates a random colour palette.

# Usage

## Basic Usage
``` 
const Palettee = require("palettee"); 
const palettee = new Palettee();
palettee.palette(); // ["#000000", "#000000", "#000000", "#000000", "#000000"]
palettee.color(); // "#000000"
```

## Configuration
You can pass a configuration object into the constructor: 
```
const palettee = new Palettee({
      size: 3,
      format: "hex",
  });
palettee.palette(); // ["#000000", "#000000", "#000000"]
palettee.palette(); // ["#000000", "#000000", "#000000"]
palettee.palette(); // ["#000000", "#000000", "#000000"]
```

Or you can pass the configuration object into each `palette()` call. This will overwrite any configurations passed into the constructor for that single palette generator call:
```
const palettee = new Palettee();
const palette = palettee.palette(3); // ["#000000", "#000000", "#000000"]
const palette = palettee.palette({
    scheme: ["monochrome"],
    size: 3,
    format: "hex",
}); // ["#000000", "#000000", "#000000"]
```

## Reference

### Configuration Object
|**Key** | **Type** | **Default** | **Description**  | 
|---|---|---|---|
|`size`|`Number`|5|Number of colors in the returned palette.  |
|`scheme`|`String` or `Array[String]`|["monochrome", "contrast", "gradient", "gradient-multi"]|Schemes that are allowed to be used for generating palettes. The generated palette will choose a random scheme out of the ones supplied. |
|`format`|`String`|"hex"|Format of the returned palette. Possible values are: <ul><li>`hex` array of hex codes as strings</li><li>`palettee` Palettee's Palette class</li></ul>  |

### Palettee
|**Method**   | **Return** | **Description**  | 
|---|---|---|
|`palette(config = 5)` | `Array[String]` or `Palette` | Generates a random palette.  |
|`color(config = {})`  | `String` or `Color` |Generates a random color.  |


### Palette
|**Class variable**   | **Type** | **Description**  | 
|---|---|---|
|`colors`  | `Array[Color]` | Array of colors in the palette.  |
|`scheme`  | `String` | The scheme the palette was generated with.  |

### Color
|**Class variable**   | **Type** | **Description**  | 
|---|---|---|
|`hsv`  | `Array[Number]` | Color in hsv form.  |
|`h`  | `Number` | Hue as a value between 0 and 360.  |
|`s`  | `Number` | Saturation as a value between 0 and 100.  |
|`v`  | `Number` | Value as a value between 0 and 100.  |
|`hex`  | `String` | Color in hex form (string).  |

|**Method**   | **Return** | **Description**  | 
|---|---|---|
|`isDark()`  | `Boolean` | Whether color is dark (value < 50).  |
|`isLight()`  | `Boolean` | Whether color is light (value > 50).  |
|`clone()`  | `Color` | Returns a clone.  |

|**Static Method**   | **Return** | **Description**  | 
|---|---|---|
|`generateRandom()`  | `Color` | Gives a random color.  |
|`generateComplement(color, variation = 0)`  | `Color` | Returns the complement color as a `Color` object. `variation` reflects the amount of variation permitted in hue.  |
