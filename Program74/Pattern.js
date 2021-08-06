"use strict";
//////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 04/08/2021
//  Program :  Accept number of rows and number of columns from user 
//             and display below pattern
//             Input : iRow = 4 iCol = 4
//             Output : A B C D
//                      a b c d
//                      A B C D
//                      a b c d 
//
//////////////////////////////////////////////////////////////////////////////////////////////////////
exports.__esModule = true;
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh......");
    console.log("Output of Obj1 : ");
    var obj1 = new Display_1.Pattern(4, 4);
    obj1.pattern();
    console.log("\nOutput of obj2 : ");
    var obj2 = new Display_1.Pattern(5, 7);
    obj2.pattern();
}
main();
