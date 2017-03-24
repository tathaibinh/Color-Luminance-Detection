# Color-Luminance-Detection

Tiny script to detect type of a given color (light or dark).

## Example usage

You will need a RGB color (`"rgb(223, 173, 52)"`) as an array.

```javascript
var strRgbColor = 'rgb(223, 173, 52)';
// Convert to array - ['223', '173', '52'];
var arrRgbColor = strRgbColor.split('(')[1].split(')')[0].split(',');

var detectColorType = new ColorLuminanceDetection(arrRgbColor);
```

## Use cases

* Detect background color of an element and set font color accordingly.
