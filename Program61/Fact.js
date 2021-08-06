"use strict";
exports.__esModule = true;
exports.OddFact = void 0;
//creation of Class
var OddFact = /** @class */ (function () {
    //Behaviour 
    function OddFact(x) {
        this.No = x;
        this.i = 0;
        this.fact = 1;
    }
    OddFact.prototype.oddfact = function () {
        if (this.No < 0) {
            this.No = -this.No;
        }
        for (this.i = this.No; this.i > 0; this.i--) {
            if (this.i % 2 != 0) {
                this.fact = this.fact * this.i;
            }
        }
        return this.fact;
    };
    return OddFact;
}());
exports.OddFact = OddFact;
