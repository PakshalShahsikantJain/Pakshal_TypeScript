"use strict";
//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program : Accept number of rows and number of columns from user and display below pattern
//            Input : iRow = 4 iCol = 3
//            Output : 1 2 3
//                     1 2 3
//                     1 2 3
//                     1 2 3 
/////////////////////////////////////////////////////////////////////////////////////////////
exports.__esModule = true;
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh......");
    var row = 4;
    var col = 3;
    //Creation of Objects
    var obj1 = new Display_1.Pattern(row, col);
    obj1.pattern();
    return 0;
}
main();
