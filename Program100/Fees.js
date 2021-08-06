"use strict";
exports.__esModule = true;
exports.Standard = void 0;
var Standard = /** @class */ (function () {
    //Behaviours 
    function Standard(x) {
        this.No = x;
        this.fees = 0;
        this.arr = [];
    }
    Standard.prototype.standard = function () {
        this.arr = [0, 8900, 12790, 21000, 23450];
        var i = 1;
        for (i = 1; i <= this.arr.length; i++) {
            if (i == this.No) {
                break;
            }
        }
        return this.arr[i];
    };
    return Standard;
}());
exports.Standard = Standard;
