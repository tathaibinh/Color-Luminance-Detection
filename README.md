# Color-Luminance-Detection

Tiny script to detect color type (light or dark) from a given 3-element array of R, G, B varying from 0 to 255.

## Example usage

An example with a RGB color (`"rgb(223, 173, 52)"`)

```javascript
var strRgbColor = 'rgb(223, 173, 52)';
// Convert to array - ['223', '173', '52'];
var arrRgbColor = strRgbColor.split('(')[1].split(')')[0].split(',');

var detectColorType = new ColorLuminanceDetection(arrRgbColor);
```

## Use cases

* Detect background color of an element and set font color accordingly.
