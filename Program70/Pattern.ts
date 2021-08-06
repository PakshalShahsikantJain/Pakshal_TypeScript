////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain 
//  Date : 03/08/2021
//  Program : Accept number of rows and number of columns from user and display below pattern
//            Input : iRow = 3 iCol = 5
//            Output : 5 4 3 2 1
//                     5 4 3 2 1
//                     5 4 3 2 1 
//
///////////////////////////////////////////////////////////////////////////////////////////////
import {Pattern} from './Display'

function main() 
{
    console.log("Jay Ganesh.....")
    var row : number = 3;
    var col : number = 5;

    //creation of Object of Class
    var obj1 = new Pattern(row,col);
    obj1.pattern();

    return 0;
}
main()