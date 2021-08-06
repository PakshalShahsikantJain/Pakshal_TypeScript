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
import {Pattern} from './Display'

function main() 
{
    console.log("Jay Ganesh......");
    var obj = new Pattern(4,4);

    obj.pattern();

    return 0;
}

main();