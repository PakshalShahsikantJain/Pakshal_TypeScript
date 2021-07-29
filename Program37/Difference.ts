//////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and return difference between 
//            summation of even digits and summation of odd digits.
//
//////////////////////////////////////////////////////////////////////////////////////////

function Difference(No : number) 
{   
    var Digit : number = 0;
    var sum : number = 0;
    var sum2 : number = 0;

    while(No != 0 )
    {
        Digit = No % 10
        if(Digit % 2 == 0)
        {
            sum = sum + Digit;
        }
        else 
        {
            sum2 = sum2 + Digit;
        }
        No = No / 10
        No = Math.floor(No)
    }

    return sum - sum2
}

function main() 
{
    console.log("Jay Ganesh..........")
    var no : number = 1018;
    var ret : number = 0;

    ret = Difference(no)

    console.log("Difference Between Summation of Even and Odd Digits is : ",ret);
}

main()