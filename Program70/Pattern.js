"use strict";
exports.__esModule = true;
////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain 
//  Date : 03/08/2021
//  Program : Accept number of rows and number of columns from user and display below pattern
//            Input : iRow = 3 iCol = 5
//            Output : 5 4 3 2 1
//                     5 4 3 2 1
//                     5 4 3 2 1 
//
///////////////////////////////////////////////////////////////////////////////////////////////
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh.....");
    var row = 3;
    var col = 5;
    var obj1 = new Display_1.Pattern(row, col);
    obj1.pattern();
    return 0;
}
main();
