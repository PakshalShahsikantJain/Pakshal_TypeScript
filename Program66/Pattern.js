"use strict";
exports.__esModule = true;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program : Accept number from user and display below pattern
//            Input : 4
//            Output : # 1 * # 2 * # 3 * # 4 * 
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh.....");
    var No = 5;
    var obj1 = new Display_1.Pattern(No);
    obj1.pattern();
}
main();
