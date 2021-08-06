"use strict";
exports.__esModule = true;
/*
Author : Pakshal Jain
Date : 06/08/2021
Program :Accept number of rows and number of columns from user and display below
pattern.
Input : iRow = 4 iCol = 4
Output : *
         * *
         * * *
         * * * *
*/
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh......");
    var obj = new Display_1.Pattern(4, 4);
    obj.pattern();
    return 0;
}
main();
