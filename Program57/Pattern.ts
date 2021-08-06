//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 02/08/2021
//  Program : Write a program which accept number from user and display below pattern
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {Pattern} from './Display';

function main() 
{
    console.log("Jay Ganesh.......")
    var no : number = 5;
    var no2 : number = 10;

    //Creation of Objects
    var obj1 =  new Pattern(no)
    var obj2 = new Pattern(no2)

    console.log("Output of First Object")
    obj1.Display()

    console.log("\nOutput of Second Object")
    obj2.Display()
}

main()