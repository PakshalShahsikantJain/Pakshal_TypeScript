"use strict";
exports.__esModule = true;
exports.Convert = void 0;
var Convert = /** @class */ (function () {
    //Behaviour
    function Convert(x) {
        this.No = x;
        this.ret = 0;
    }
    Convert.prototype.DollarToINR = function () {
        this.ret = this.No * 74; // 1 Dollar = 70 ₹
        return this.ret;
    };
    return Convert;
}());
exports.Convert = Convert;
