"use strict";
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Author : Pakshal Jain
// Date : 2/08/2021
// Program : Write a program which accept range from user and return addition of all numbers 
//          in between that range. (Range should contains positive numbers only) 
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.__esModule = true;
//Required Import 
var Addition_1 = require("./Addition");
function main() {
    console.log("Jay Ganesh.......");
    var No = 23;
    var No2 = 30;
    var No3 = 10;
    var No4 = 18;
    var No5 = -10;
    var No6 = 2;
    var ret = 0;
    var obj1 = new Addition_1.Add(No, No2);
    var obj2 = new Addition_1.Add(No3, No4);
    var obj3 = new Addition_1.Add(No5, No6);
    ret = obj1.Addition();
    if (ret == -1) {
        console.log("Invalid range");
        return;
    }
    console.log("Addition of Number Between Entered Range of Obj1 is : ", ret);
    ret = obj2.Addition();
    if (ret == -1) {
        console.log("Invalid range");
        return;
    }
    console.log("Addition of Number Between Entered Range of Obj2 is : ", ret);
    ret = obj3.Addition();
    if (ret == -1) {
        console.log("Invalid range");
        return;
    }
    console.log("Addition of Number Between Entered Range of Obj3 is : ", ret);
    return 0;
}
main();
