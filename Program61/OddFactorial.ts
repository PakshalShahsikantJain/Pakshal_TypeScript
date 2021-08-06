/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 02/08/2021
//  Program : Write a program to find odd factorial of given number. 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
import {OddFact} from './Fact'

function main() 
{
    console.log("Jay Ganesh.....")
    var No : number = 5;
    var No2 : number = 10;
    var ret : number = 0;

    var obj1 = new OddFact(No)
    var obj2 = new OddFact(No2)

    ret = obj1.oddfact()
    console.log("Odd Factorial of Obj1 is : ",ret);

    ret = obj2.oddfact()
    console.log("Odd Factorial of Obj2 is : ",ret);

}

main()