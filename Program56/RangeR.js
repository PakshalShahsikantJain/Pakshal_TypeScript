"use strict";
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 2/08/2021
//  Program : Write a program which accept accept range from user and display all numbers in 
//            between that range in reverse order
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.__esModule = true;
var DisplayR_1 = require("./DisplayR");
function main() {
    console.log("Jay Ganesh......");
    var No = 22;
    var No2 = 35;
    //Creation of Objects
    var obj1 = new DisplayR_1.DisplayR(No, No2);
    var obj2 = new DisplayR_1.DisplayR(-10, 2);
    console.log("Output of Obj1");
    obj1.Display();
    console.log("Output of Obj2");
    obj2.Display();
}
main();
