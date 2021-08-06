"use strict";
exports.__esModule = true;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 02/08/2021
//  Program : Write a program to find even factorial of given number
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var EFact_1 = require("./EFact");
function main() {
    console.log("Jay Ganesh........");
    var obj1 = new EFact_1.Factorial(5);
    var obj2 = new EFact_1.Factorial(-5);
    var obj3 = new EFact_1.Factorial(10);
    var ret = 0;
    ret = obj1.Fact();
    console.log("Even Factorial of obj1 is : ", ret);
    ret = obj2.Fact();
    console.log("Even Factorial of obj2 is : ", ret);
    ret = obj3.Fact();
    console.log("Even Factorial of obj3 is : ", ret);
}
main();
