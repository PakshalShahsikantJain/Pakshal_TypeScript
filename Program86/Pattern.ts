/*
AUhtor : Pakshal Jain
Date : 06/08/2021
Program :  Accept number of rows and number of columns from user and display below
pattern.
Input : iRow = 6 iCol = 5
Output : * * * * *
         * @ @ @ *
         * @ @ @ *
         * @ @ @ *
         * @ @ @ *
         * * * * * 
*/

import {Pattern} from './Display'

function main() 
{
    console.log("Jay Ganesh...");

    console.log("OUtput of obj : ");
    var obj = new Pattern(6,5);
    obj.pattern();

    console.log("OUtput of Obj2 : ")
    var obj2 = new Pattern(7,6);
    obj2.pattern();
    return 0;
}

main();