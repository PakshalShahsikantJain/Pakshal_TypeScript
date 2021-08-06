"use strict";
exports.__esModule = true;
exports.Pattern = void 0;
//Creation of CLass 
var Pattern = /** @class */ (function () {
    //Behaviours 
    function Pattern(x, y) {
        this.Row = x;
        this.Col = y;
        this.i = 0;
        this.j = 0;
    }
    Pattern.prototype.pattern = function () {
        for (this.i = 1; this.i <= this.Row; this.i++) {
            for (this.j = 1; this.j <= this.Col; this.j++) {
                if (this.i % 2 != 0) {
                    process.stdout.write(" " + this.j + " ");
                }
                else {
                    process.stdout.write(-this.j + " ");
                }
            }
            console.log();
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
