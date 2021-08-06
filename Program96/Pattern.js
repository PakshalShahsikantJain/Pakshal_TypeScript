"use strict";
exports.__esModule = true;
/*
Author : Pakshal Jain
Date : 06/08/2021
Program :Accept number of rows and number of columns from user and display below
pattern.
Input : iRow = 6 iCol = 6
Output : * * * * * *
         * # # # * *
         * # # * $ *
         * # * $ $ *
         * * $ $ $ *
         * * * * * *
*/
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh......");
    console.log("Output of obj : ");
    var obj = new Display_1.Pattern(4, 4);
    obj.pattern();
    console.log("Output of obj2 : ");
    var obj2 = new Display_1.Pattern(6, 6);
    obj2.pattern();
    return 0;
}
main();
