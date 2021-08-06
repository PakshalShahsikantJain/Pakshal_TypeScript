/////////////////////////////////////////////////////////////
//
//  Author :Paksal Jain
//  Date : 04/08/2021
//  Program : Accept number of rows and number of columns 
//            from user and display below  pattern.
//            Input : iRow = 4 iCol = 4
//            Output : A B C D
//                     A B C D
//                     A B C D
//                     A B C D 
//
/////////////////////////////////////////////////////////////

import {Pattern} from './Display'

function main()
{
    console.log("Jay Ganesh.....")
    
    //Creation of Objects
    var obj1 = new Pattern(4,4)

    obj1.pattern()
}

main()