"use strict";
exports.__esModule = true;
exports.DiffFact = void 0;
//Creation of Class
var DiffFact = /** @class */ (function () {
    //Behaviour 
    function DiffFact(x) {
        this.No = x;
        this.i = 0;
        this.Efact = 1;
        this.Ofact = 1;
        this.difference = 0;
    }
    DiffFact.prototype.Dfact = function () {
        for (this.i = this.No; this.i > 0; this.i--) {
            if (this.i % 2 == 0) {
                this.Efact = this.Efact * this.i;
            }
            else {
                this.Ofact = this.Ofact * this.i;
            }
        }
        this.difference = this.Efact - this.Ofact;
        return this.difference;
    };
    return DiffFact;
}());
exports.DiffFact = DiffFact;
