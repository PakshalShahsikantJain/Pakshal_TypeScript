/*
    Author : Pakshal Jain 
    Date : 05/08/2021
    Program : Accept number of rows and number of columns from user and display below
            pattern.
            Input : iRow = 3 iCol = 5
            Output : A A A A A
                     B B B B B
                     C C C C C
*/

import {Pattern} from './Display'

function main() 
{
    console.log("Jay Ganesh.....")

    console.log("Ouput of Obj : ")
    var obj = new Pattern(3,5)
    obj.pattern();

    console.log("\nOutput of obj2 : ")
    var obj2 = new Pattern(4,6)
    obj2.pattern();

}

main()