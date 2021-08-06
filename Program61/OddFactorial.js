"use strict";
exports.__esModule = true;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 02/08/2021
//  Program : Write a program to find odd factorial of given number. 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Fact_1 = require("./Fact");
function main() {
    console.log("Jay Ganesh.....");
    var No = 5;
    var No2 = 10;
    var ret = 0;
    var obj1 = new Fact_1.OddFact(No);
    var obj2 = new Fact_1.OddFact(No2);
    ret = obj1.oddfact();
    console.log("Odd Factorial of Obj1 is : ", ret);
    ret = obj2.oddfact();
    console.log("Odd Factorial of Obj2 is : ", ret);
}
main();
