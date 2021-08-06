"use strict";
exports.__esModule = true;
exports.Display = void 0;
var Display = /** @class */ (function () {
    //Behaviour
    function Display(x, y) {
        this.no = x;
        this.ch = y;
        this.AsciiChar = 0;
        this.i = 0;
    }
    Display.prototype.pattern = function () {
        process.stdout.write(this.ch + " ");
        for (this.i = 0; this.i < this.no; this.i++) {
            this.AsciiChar = this.ch.charCodeAt(0);
            this.AsciiChar = this.AsciiChar + 1;
            this.ch = String.fromCharCode(this.AsciiChar);
            process.stdout.write(this.ch + " ");
        }
    };
    return Display;
}());
exports.Display = Display;
