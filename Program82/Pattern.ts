/*
Author : Pakshal Jain
Date : 05/08/2021
Program : Accept number of rows and number of columns from user and display
below pattern.
Input : iRow = 4 iCol = 4
Output : 1 2 3 4
         2 3 4 5
         3 4 5 6
         4 5 6 7 

*/ 
import {Pattern} from './Display';

function main() 
{
    console.log("JAy Ganesh.....");

    console.log("Output of obj : ");
    var obj = new Pattern(4,4);
    obj.pattern();

    console.log("Output of obj2 : ");
    var obj2 = new Pattern(5,5);
    obj2.pattern();
    return 0;
}

main();