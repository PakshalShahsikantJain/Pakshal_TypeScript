"use strict";
/////////////////////////////////////////////////////////////
//
//  Author :Paksal Jain
//  Date : 04/08/2021
//  Program : Accept number of rows and number of columns 
//            from user and display below  pattern.
//            Input : iRow = 4 iCol = 4
//            Output : A B C D
//                     A B C D
//                     A B C D
//                     A B C D 
//
/////////////////////////////////////////////////////////////
exports.__esModule = true;
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh.....");
    var obj1 = new Display_1.Pattern(4, 4);
    obj1.pattern();
}
main();
