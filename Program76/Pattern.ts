/*
Author : Pakshal Jain
Date : 05/08/2021
Program : Accept number of rows and number of columns from user and display below
pattern.
Input : iRow = 4 iCol = 5
Output : 4 4 4 4 4
         3 3 3 3 3
         2 2 2 2 2
         1 1 1 1 1 
*/

import {Pattern} from './Display'

function main()
{
    console.log("Jay Ganesh....");

    console.log("Output of Obj1");
    var obj = new Pattern(4,5);
    obj.pattern()

    console.log("\nOutput of Obj2");
    var obj2 = new Pattern(6,4);
    obj2.pattern()

    return 0;
}
main()