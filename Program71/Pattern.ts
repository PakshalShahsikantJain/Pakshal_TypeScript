///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program : Accept number of rows and number of columns from user and display below pattern. 
//            Input : iRow = 3 iCol = 4
//            Output : * # * #
//                     * # * #
//                     * # * # 
///////////////////////////////////////////////////////////////////////////////////////////////////////

import {Pattern} from './Display'
function main()
{
    console.log("Ganapati Bappa Morya.......")
    var row : number = 3;
    var col : number = 4;

    //Creation of Objects 
    var obj = new Pattern(row,col);
    obj.pattern();
}
main()