"use strict";
exports.__esModule = true;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program :  Accept number from user and display below pattern
//             Input : 5 
//             Output : A B C D E 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh.......");
    var ch = 'D';
    var no = 5;
    //Creation of Objects
    var obj1 = new Display_1.Display(no, ch);
    obj1.pattern();
}
main();
