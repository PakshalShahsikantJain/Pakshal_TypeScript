"use strict";
exports.__esModule = true;
exports.Pattern = void 0;
//Creation of Class
var Pattern = /** @class */ (function () {
    //Behaviours 
    function Pattern(x, y) {
        this.Row = x;
        this.Col = y;
        this.ch = 'a';
        this.Ascii = 0;
        this.i = 0;
        this.j = 0;
    }
    Pattern.prototype.pattern = function () {
        this.Ascii = this.ch.charCodeAt(0);
        for (this.i = 1; this.i <= this.Row; this.i++) {
            for (this.j = 1; this.j <= this.Col; this.j++) {
                if (this.i % 2 != 0) {
                    process.stdout.write(String.fromCharCode(this.Ascii) + " ");
                    this.Ascii = this.Ascii + 1;
                }
                else {
                    process.stdout.write(this.j + " ");
                }
            }
            this.Ascii = this.ch.charCodeAt(0);
            console.log();
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
