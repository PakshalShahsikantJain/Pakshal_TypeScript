"use strict";
//Creation of Class 
exports.__esModule = true;
exports.TAX = void 0;
var TAX = /** @class */ (function () {
    //Behaviours 
    function TAX(x) {
        this.No = x;
    }
    TAX.prototype.InTax = function () {
        if (this.No < 500000) {
            this.tax = 0;
            return this.tax;
        }
        else if ((this.No > 500000) && (this.No < 1000000)) {
            this.tax = (this.No * 10) / 100;
            return this.tax;
        }
        else if ((this.No > 1000000) && (this.No < 2000000)) {
            this.tax = (this.No * 15) / 100;
            return this.tax;
        }
        else if (this.No > 2000000) {
            this.tax = (this.No * 30) / 100;
            return this.tax;
        }
    };
    return TAX;
}());
exports.TAX = TAX;
