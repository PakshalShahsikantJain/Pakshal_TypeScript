/*
Author : Pakshal Jain
Date : 06/08/2021
Program :Accept number of rows and number of columns from user and display below
pattern.
Input : iRow = 6 iCol = 6
Output : * * * * * *
         *       * *
         *     *   *
         *   *     *
         * *       *
         * * * * * *
*/
import {Pattern} from './Display'

function main() 
{
    console.log("Jay Ganesh......");
    
    console.log("Output of obj : ")
    var obj = new Pattern(4,4);
    obj.pattern();

    console.log("Output of obj2 : ")
    var obj2 = new Pattern(5,5);
    obj2.pattern();

    return 0;
}

main();