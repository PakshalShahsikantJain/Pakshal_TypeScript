"use strict";
exports.__esModule = true;
exports.Pattern = void 0;
var Pattern = /** @class */ (function () {
    //Behaviours 
    function Pattern(x, y) {
        this.Row = x;
        this.Col = y;
        this.i = 0;
        this.j = 0;
    }
    Pattern.prototype.pattern = function () {
        for (this.i = this.Row; this.i > 0; this.i--) {
            for (this.j = 0; this.j <= this.Col; this.j++) {
                process.stdout.write(this.i + " ");
            }
            console.log();
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
