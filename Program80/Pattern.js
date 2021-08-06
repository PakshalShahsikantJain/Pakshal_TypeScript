"use strict";
/*
Author : Pakshl Jain
Date : 05/08/2021
Program : Accept number of rows and number of columns from user and display
below pattern.
Input : iRow = 5 iCol = 5
Output : a b c d e
         1 2 3 4 5
         a b c d e
         1 2 3 4 5
         a b c d e
*/
exports.__esModule = true;
var Display_1 = require("./Display");
function main() {
    console.log("Jay Ganesh.....");
    //Creation of object 
    console.log("Output of obj : ");
    var obj = new Display_1.Pattern(5, 5);
    obj.pattern();
    console.log("Output of obj2 : ");
    var obj2 = new Display_1.Pattern(4, 4);
    obj2.pattern();
    return 0;
}
main();
