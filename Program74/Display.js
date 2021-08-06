"use strict";
//creation of class
exports.__esModule = true;
exports.Pattern = void 0;
var Pattern = /** @class */ (function () {
    //Behaviours 
    function Pattern(x, y) {
        this.Row = x;
        this.Col = y;
        this.ch1 = 'A';
        this.ch2 = 'a';
        this.Ascii = 0;
        this.Ascii2 = 0;
        this.i = 0;
        this.j = 0;
    }
    Pattern.prototype.pattern = function () {
        this.Ascii = this.ch1.charCodeAt(0);
        this.Ascii2 = this.ch2.charCodeAt(0);
        for (this.i = 1; this.i <= this.Row; this.i++) {
            for (this.j = 1; this.j <= this.Col; this.j++) {
                if (this.i % 2 != 0) {
                    process.stdout.write(String.fromCharCode(this.Ascii) + " ");
                }
                else {
                    process.stdout.write(String.fromCharCode(this.Ascii2) + " ");
                }
                this.Ascii = this.Ascii + 1;
                this.Ascii2 = this.Ascii2 + 1;
            }
            this.Ascii = this.ch1.charCodeAt(0);
            this.Ascii2 = this.ch2.charCodeAt(0);
            console.log();
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
