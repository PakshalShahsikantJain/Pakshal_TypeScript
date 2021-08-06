"use strict";
// Creation of Class
exports.__esModule = true;
exports.DisplayR = void 0;
var DisplayR = /** @class */ (function () {
    //Behaviour
    function DisplayR(x, y) {
        this.No = x;
        this.No2 = y;
        this.i = 0;
    }
    DisplayR.prototype.Display = function () {
        for (this.i = this.No2; this.i >= this.No; this.i--) {
            process.stdout.write(this.i + " ");
        }
        console.log(" ");
    };
    return DisplayR;
}());
exports.DisplayR = DisplayR;
