"use strict";
//Creation of Class 
exports.__esModule = true;
exports.HOTEL = void 0;
var HOTEL = /** @class */ (function () {
    //Behaviours 
    function HOTEL(x) {
        this.No = x;
    }
    HOTEL.prototype.discount = function () {
        if (this.No < 500) {
            this.disc = this.No;
            return this.disc;
        }
        else if ((this.No > 500) && (this.No < 1500)) {
            this.disc = (this.No * 10) / 100;
            this.disc = this.No - this.disc;
            return this.disc;
        }
        else if (this.No > 1500) {
            this.disc = (this.No * 15) / 100;
            this.disc = this.No - this.disc;
            return this.disc;
        }
    };
    return HOTEL;
}());
exports.HOTEL = HOTEL;
