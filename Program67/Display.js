"use strict";
exports.__esModule = true;
exports.Pattern = void 0;
var Pattern = /** @class */ (function () {
    //Beaviours
    function Pattern(x) {
        this.No = x;
        this.i = 0;
    }
    Pattern.prototype.pattern = function () {
        for (this.i = 1; this.i <= this.No; this.i++) {
            process.stdout.write(this.i * 2 + " ");
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
