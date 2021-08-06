"use strict";
exports.__esModule = true;
/*
Author : Pakshal Jain
Date : 06/08/2021
Program :Accept number of rows and number of columns from user and display below
pattern.
Input : iRow = 4 iCol = 4
Output : 1 2 3 4 5
         1 2     5
         1   3   5
         1     4 5
         1 2 3 4 5
*/
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh......");
    console.log("Output of obj : ");
    var obj = new Display_1.Pattern(4, 4);
    obj.pattern();
    console.log("Output of obj2 : ");
    var obj2 = new Display_1.Pattern(5, 5);
    obj2.pattern();
    return 0;
}
main();
