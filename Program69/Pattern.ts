//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program : Accept number of rows and number of columns from user and display below pattern
//            Input : iRow = 4 iCol = 3
//            Output : 1 2 3
//                     1 2 3
//                     1 2 3
//                     1 2 3 
/////////////////////////////////////////////////////////////////////////////////////////////

import {Pattern} from './Display'

function main() 
{
    console.log("Jay Ganesh......");
    var row : number = 4;
    var col : number = 3;

    //Creation of Objects
    var obj1 = new Pattern(row,col);
    obj1.pattern();

    return 0;
}

main()