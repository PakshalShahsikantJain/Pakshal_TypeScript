"use strict";
exports.__esModule = true;
exports.Pattern = void 0;
//Creatio of Class
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
            for (this.j = 1; this.j <= this.Col; this.j++) {
                process.stdout.write(this.no + " ");
                this.no = this.no + 1;
            }
            this.no = this.no - 3;
            console.log();
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
