"use strict";
exports.__esModule = true;
/*
Author : Pakshal Jain
Date : 05/08/2021
Program : Accept number of rows and number of columns from user and display
below pattern.
Input : iRow = 4 iCol = 4
Output : 2 4 6 8 10
         1 3 5 7 9
         2 4 6 8 10
         1 3 5 7 9
*/
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh.....");
    var obj = new Display_1.Pattern(4, 4);
    var obj2 = new Display_1.Pattern(5, 5);
    obj.pattern();
    //obj2.pattern()
}
main();
