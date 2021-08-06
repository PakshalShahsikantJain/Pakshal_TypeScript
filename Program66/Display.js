"use strict";
exports.__esModule = true;
exports.Pattern = void 0;
var Pattern = /** @class */ (function () {
    //Behaviours 
    function Pattern(x) {
        this.No = x;
        this.i = 0;
    }
    Pattern.prototype.pattern = function () {
        for (this.i = 1; this.i <= this.No; this.i++) {
            process.stdout.write("#" + " " + this.i + " " + "*" + " ");
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
