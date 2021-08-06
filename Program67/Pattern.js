"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain 
//  Date : 03/07/2021
//  Prorgram : Accept number from user and display below pattern. 
//             Input : 8
//             Output : 2 4 6 8 10 12 14 16 
//
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
exports.__esModule = true;
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh.....");
    var no = 8;
    var obj1 = new Display_1.Pattern(no);
    console.log("Output : ");
    obj1.pattern();
}
main();
