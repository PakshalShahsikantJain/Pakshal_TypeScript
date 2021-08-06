///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain 
//  Date : 03/07/2021
//  Prorgram : Accept number from user and display below pattern. 
//             Input : 8
//             Output : 2 4 6 8 10 12 14 16 
//
//
///////////////////////////////////////////////////////////////////////////////////////////////////////

import {Pattern} from './Display'

function main() 
{
    console.log("Jay Ganesh.....");
    var no : number = 8;

    var obj1  = new Pattern(no);

    console.log("Output : ")
    obj1.pattern();
}

main()