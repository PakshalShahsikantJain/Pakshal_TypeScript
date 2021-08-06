/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 03/08/2021
//  Program :Write a program which returns difference between Even factorial and odd factorial 
//           of given number 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

import {DiffFact} from './Fact'

function main() 
{
    console.log("Jay Ganesh........")
    var no : number = 5;
    var no2 : number = 10;
    var ret : number = 0;

    //Creation of Objects
    var obj1 = new DiffFact(no)
    var obj2 = new DiffFact(no2)

    ret = obj1.Dfact()
    console.log("Difference Between Even Factorial and Odd Factorial of obj1 is : ",ret);

    ret = obj2.Dfact()
    console.log("Difference Between Even Factorial and Odd Factorial of obj2 is : ",ret);
}

main()