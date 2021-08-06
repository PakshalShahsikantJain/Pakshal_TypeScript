"use strict";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program :Write a program which returns difference between Even factorial and odd factorial 
//           of given number 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.__esModule = true;
var Fact_1 = require("./Fact");
function main() {
    console.log("Jay Ganesh........");
    var no = 5;
    var no2 = 10;
    var ret = 0;
    //Creation of Objects
    var obj1 = new Fact_1.DiffFact(no);
    var obj2 = new Fact_1.DiffFact(no2);
    ret = obj1.Dfact();
    console.log("Difference Between Even Factorial and Odd Factorial of obj1 is : ", ret);
    ret = obj2.Dfact();
    console.log("Difference Between Even Factorial and Odd Factorial of obj2 is : ", ret);
}
main();
