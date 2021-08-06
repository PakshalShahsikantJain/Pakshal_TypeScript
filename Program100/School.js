"use strict";
exports.__esModule = true;
/*
Author : Pakshal Jain
Date : 06/08/2021
Program : Design application for school management system.
As school is primary there are 4 standards from 1 to 4.
School fees of each standard is different.
For first standard fees are 8900, for second standard 12790, for
third standard 21000 and for fourth standard fees are 23450.
We have to accept standard from user and display the
corresponding fees.
Input : 2 Output : 12790
Input : 4 Output : 23450
Input : 6 Output : Wrong input
*/
var Fees_1 = require("./Fees");
function main() {
    console.log("Jay Ganesh......");
    var No = 0;
    var ret = 0;
    No = 2;
    var obj = new Fees_1.Standard(No);
    ret = obj.standard();
    if (ret == undefined) {
        console.log("Invalid Input.....");
        return;
    }
    console.log("Fees of %d standard is : ", No, ret);
    No = 4;
    var obj2 = new Fees_1.Standard(No);
    ret = obj2.standard();
    if (ret == undefined) {
        console.log("Invalid Input.....");
        return;
    }
    console.log("Fees of %d standard is : ", No, ret);
    return 0;
}
main();
