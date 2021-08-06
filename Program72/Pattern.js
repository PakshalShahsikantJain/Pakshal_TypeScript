"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program : Accept number of rows and number of columns from user and display below pattern. 
//            Input : iRow = 3 iCol = 4
//            Output : 1 1 1 1
//                     2 2 2 2
//                     3 3 3 3
//                     4 4 4 4
///////////////////////////////////////////////////////////////////////////////////////////////////////
exports.__esModule = true;
var Display_1 = require("./Display");
function main() {
    console.log("Ganapati Bappa Morya.......");
    var row = 4;
    var col = 4;
    //Creation of Objects 
    var obj = new Display_1.Pattern(row, col);
    obj.pattern();
}
main();
