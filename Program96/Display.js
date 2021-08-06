"use strict";
exports.__esModule = true;
exports.Pattern = void 0;
//Creation of Class 
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
            for (this.j = 1; this.j <= this.Col; this.j++) {
                if ((this.i == this.j) || (this.i == 1) || (this.j == 1) || (this.i == this.Row) || (this.j == this.Col)) {
                    process.stdout.write("*" + "\t");
                }
                else if (this.i > this.j) {
                    process.stdout.write("#" + "\t");
                }
                else {
                    process.stdout.write("₹" + "\t");
                }
            }
            console.log();
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
