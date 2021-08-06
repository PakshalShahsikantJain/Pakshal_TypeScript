"use strict";
exports.__esModule = true;
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain 
//  Date : 02/08/2021
//  Program : Write a program which accept range from user and return addition of all even 
//            numbers in between that range. (Range should contains positive numbers only)
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////
var AdditionEven_1 = require("./AdditionEven");
function main() {
    console.log("Jay Ganesh......");
    var no = 23;
    var no2 = 30;
    var ret = 0;
    var obj1 = new AdditionEven_1.Addition(no, no2);
    ret = obj1.Add();
    console.log("Addition of Even Number Between Entered Range of Obj1 is : ", ret);
}
main();
