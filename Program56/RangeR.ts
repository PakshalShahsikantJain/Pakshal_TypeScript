//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 2/08/2021
//  Program : Write a program which accept accept range from user and display all numbers in 
//            between that range in reverse order
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {DisplayR} from './DisplayR'

function main() 
{
    console.log("Jay Ganesh......")

    var No : number = 22
    var No2 : number = 35

    //Creation of Objects
    var obj1 = new DisplayR(No,No2);
    var obj2 = new DisplayR(-10,2);

    console.log("Output of Obj1")
    obj1.Display()

    console.log("Output of Obj2")
    obj2.Display()
}

main()