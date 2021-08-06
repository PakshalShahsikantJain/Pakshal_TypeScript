//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program :  Accept number from user and display below pattern
//             Input : 5 
//             Output : A B C D E 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
import {Display} from './Display'

function main()
{
    console.log("Jay Ganesh.......")
    var ch : string = 'D'
    var no : number = 5;

    //Creation of Objects
    var obj1 = new Display(no,ch)
    obj1.pattern()
}
main()