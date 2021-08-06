"use strict";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 02/08/2021
//  Program : Write a program which accept number from user and display below pattern
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.__esModule = true;
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh.......");
    var no = 5;
    var no2 = 10;
    //Creation of Objects
    var obj1 = new Display_1.Pattern(no);
    var obj2 = new Display_1.Pattern(no2);
    console.log("Output of First Object");
    obj1.Display();
    console.log("\nOutput of Second Object");
    obj2.Display();
}
main();
