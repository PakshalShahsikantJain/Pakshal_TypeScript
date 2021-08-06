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
    Pattern.prototype.pattern = function () {
        for (this.i = this.No; this.i > 0; this.i--) {
            process.stdout.write(this.i + " " + "#" + " ");
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
