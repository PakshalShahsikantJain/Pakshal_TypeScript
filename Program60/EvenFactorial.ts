////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 02/08/2021
//  Program : Write a program to find even factorial of given number
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
import {Factorial} from './EFact'

function main() 
{
    console.log("Jay Ganesh........")
    var obj1 = new Factorial(5)
    var obj2 = new Factorial(-5)
    var obj3 = new Factorial(10)

    var ret : number = 0;

    ret = obj1.Fact()
    console.log("Even Factorial of obj1 is : ",ret);

    ret = obj2.Fact()
    console.log("Even Factorial of obj2 is : ",ret);

    ret = obj3.Fact()
    console.log("Even Factorial of obj is : ",ret);
    
}

main()