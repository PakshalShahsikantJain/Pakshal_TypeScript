////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program : Accept number from user and display below pattern
//            Input : 4
//            Output : # 1 * # 2 * # 3 * # 4 * 
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
import {Pattern} from './Display'

function main()
{
    console.log("Jay Ganesh.....")
    var No : number = 5;

    var obj1 = new Pattern(No)

    obj1.pattern()
}

main()