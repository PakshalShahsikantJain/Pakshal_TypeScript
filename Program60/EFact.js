"use strict";
exports.__esModule = true;
exports.Factorial = void 0;
var Factorial = /** @class */ (function () {
    //Behaviours 
    function Factorial(x) {
        this.No = x;
        this.fact = 1;
        this.i = 0;
    }
    Factorial.prototype.Fact = function () {
        if (this.No < 0) {
            this.No = -this.No;
        }
        for (this.i = this.No; this.i > 0; this.i--) {
            if ((this.i % 2) == 0) {
                this.fact = this.fact * this.i;
            }
        }
        return this.fact;
    };
    return Factorial;
}());
exports.Factorial = Factorial;
