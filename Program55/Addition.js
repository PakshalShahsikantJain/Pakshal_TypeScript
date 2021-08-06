"use strict";
exports.__esModule = true;
exports.Add = void 0;
// Creation of Class
var Add = /** @class */ (function () {
    // Behaviours
    function Add(x, y) {
        this.No = x;
        this.No2 = y;
        this.i = 0;
        this.sum = 0;
    }
    Add.prototype.Addition = function () {
        if ((this.No < 0) || (this.No2 < 0)) {
            return -1;
        }
        else if (this.No > this.No2) {
            console.log("Invalid Range");
        }
        for (this.i = this.No; this.i <= this.No2; this.i++) {
            this.sum = this.sum + this.i;
        }
        return this.sum;
    };
    return Add;
}());
exports.Add = Add;
