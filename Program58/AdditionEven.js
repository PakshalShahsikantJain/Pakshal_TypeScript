"use strict";
exports.__esModule = true;
exports.Addition = void 0;
var Addition = /** @class */ (function () {
    //Behaviour 
    function Addition(x, y) {
        this.no = x;
        this.no2 = y;
        this.i = 0;
        this.sum = 0;
    }
    Addition.prototype.Add = function () {
        for (this.i = this.no; this.i <= this.no2; this.i++) {
            if (this.i % 2 == 0) {
                this.sum = this.sum + this.i;
            }
        }
        return this.sum;
    };
    return Addition;
}());
exports.Addition = Addition;
