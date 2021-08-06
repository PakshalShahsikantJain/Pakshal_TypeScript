"use strict";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program : Accept number from user and display below pattern
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.__esModule = true;
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh.......");
    var no = 5;
    var obj1 = new Display_1.Pattern(no);
    var obj2 = new Display_1.Pattern(10);
    console.log("Output of Obj1 :");
    obj1.pattern();
    console.log("\nOutput of Obj2 : ");
    obj2.pattern();
}
main();
