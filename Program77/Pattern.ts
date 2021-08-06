/*
Author : Pakshal Jain
Date : 05/08/2021
Program : Accept number of rows and number of columns from user and display below
pattern.
Input : iRow = 3 iCol = 4
Output : 1 2 3 4
        5 6 7 8
        9 10 11 12 
*/

import {Pattern} from './Display'

function main() 
{
    console.log("Jay Ganesh.....");
    
    var obj = new Pattern(3,4);
    obj.pattern();

    return 0;
}

main()