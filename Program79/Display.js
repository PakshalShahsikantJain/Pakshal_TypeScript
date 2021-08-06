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
        this.no = 1;
    }
    Pattern.prototype.pattern = function () {
        for (this.i = 1; this.i <= this.Row; this.i++) {
            for (this.j = 1; this.j <= this.Col * 2; this.j++) {
                if ((this.i % 2 != 0) && (this.no % 2 == 0)) {
                    process.stdout.write(this.no + " ");
                }
                else if ((this.i % 2 == 0) && (this.no % 2 != 0)) {
                    process.stdout.write(this.no + " ");
                }
                this.no = this.no + 1;
            }
            this.no = 1;
            console.log();
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
