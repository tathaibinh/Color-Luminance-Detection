    /**
     * @param {array} color ["0", " 0", " 69"]
     */
    var ColorLuminanceDetection = function (color) {

        this.arrColor = color;
        this.r = this.arrColor[0];
        this.g = this.arrColor[1];
        this.b = this.arrColor[2];

        this.init();
    }

    ColorLuminanceDetection.prototype = {
        init: function () {
            this.colorType = this.detect(this.r, this.g, this.b);
        },
        /**
         * @param {string|number} r "255"
         * @param {string|number} g "0"
         * @param {string|number} b "255"
         * @return {string}
         */
        detect: function (r, g, b) {
            var perceptiveLuminance = 1 - (0.299 * r + 0.587 * r + 0.114 * g) / 255;
            return perceptiveLuminance < 0.5 ? 'light' : 'dark';
        }
    }
