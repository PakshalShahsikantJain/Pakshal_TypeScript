////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain 
//  Date : 02/08/2021
//  Program : Write a program which accept range from user and return addition of all even 
//            numbers in between that range. (Range should contains positive numbers only)
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////
import {Addition} from './AdditionEven'

function main() 
{
    console.log("Jay Ganesh......");
    var no : number = 23;
    var no2 : number = 30;
    var ret : number = 0;

    var obj1 = new Addition(no,no2);
    ret = obj1.Add()
    console.log("Addition of Even Number Between Entered Range of Obj1 is : ",ret);
}

main()