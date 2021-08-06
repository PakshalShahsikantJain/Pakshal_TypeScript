"use strict";
exports.__esModule = true;
exports.Pattern = void 0;
//Creation of Class
var Pattern = /** @class */ (function () {
    //Behaviour
    function Pattern(x) {
        this.No = x;
        this.i = 0;
    }
    Pattern.prototype.Display = function () {
        for (this.i = 0; this.i < this.No; this.i++) {
            process.stdout.write("*" + " ");
        }
        for (this.i = 0; this.i < this.No; this.i++) {
            process.stdout.write("#" + " ");
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
