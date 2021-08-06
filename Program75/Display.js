"use strict";
exports.__esModule = true;
exports.Pattern = void 0;
var Pattern = /** @class */ (function () {
    //Behaviours 
    function Pattern(x, y) {
        this.Row = x;
        this.Col = y;
        this.ch = 'A';
        this.char = 0;
        this.i = 0;
        this.j = 0;
    }
    Pattern.prototype.pattern = function () {
        this.char = this.ch.charCodeAt(0);
        for (this.i = 1; this.i <= this.Row; this.i++) {
            for (this.j = 1; this.j <= this.Col; this.j++) {
                process.stdout.write(String.fromCharCode(this.char) + " ");
            }
            this.char = this.char + 1;
            console.log();
        }
    };
    return Pattern;
}());
exports.Pattern = Pattern;
