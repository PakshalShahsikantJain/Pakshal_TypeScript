"use strict";
exports.__esModule = true;
/*
Author : Pakshal Jain
Date : 05/08/2021
Program : Accept number of rows and number of columns from user and display
below pattern.
Input : iRow = 5 iCol = 5
Output : 1 2 3 4 5
        -1 -2 -3 -4 -5
         1 2 3 4 5
        -1 -2 -3 -4 -5
         1 2 3 4 5
*/
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh.....");
    //Creation of Objects 
    console.log("Output of Obj1 : ");
    var obj = new Display_1.Pattern(4, 4);
    obj.pattern();
    console.log("Output of obj2 : ");
    var obj2 = new Display_1.Pattern(5, 5);
    obj2.pattern();
    return 0;
}
main();
