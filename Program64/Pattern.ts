////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program : Accept number from user and display below pattern
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {Pattern} from './Display'

function main() 
{
    console.log("Jay Ganesh.......")
    var no :number = 5;
    var obj1 = new Pattern(no);
    var obj2 = new Pattern(10);

    console.log("Output of Obj1 :")
    obj1.pattern()

    console.log("\nOutput of Obj2 : ")
    obj2.pattern()
}

main()