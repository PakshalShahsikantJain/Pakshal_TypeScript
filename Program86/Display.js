"use strict";
//Creation of Class
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
        for (this.i = 1; this.i <= this.Row; this.i++) {
            for (this.j = 1; this.j <= this.Col; this.j++) {
                if ((this.i == 1) || (this.j == 1) || (this.i == this.Row) || (this.j == this.Col)) {
                    process.stdout.write("*" + "\t");
                }
                else {
                    process.stdout.write("@" + "\t");
                }
            }
            console.log();
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
