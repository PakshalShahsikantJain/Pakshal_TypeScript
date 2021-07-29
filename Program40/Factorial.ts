///////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 29/07/2021
//  Program : Write a program to find factorial of given number
//
///////////////////////////////////////////////////////////////////////////////////////////

function Fact(no : number) : number 
{
    `
    This Fucntion is used to calculate Factorial of Given Number
    :param : no
    :return :factorial
    `
    var i : number = 0;
    var factorial : number = 1;

    if(no < 0) 
    {
        no = -no
    }

    for(i = no;i > 0;i--)
    {
        factorial = factorial * i
    }

    return factorial;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh........")
    var no : number = -4;
    var ret : number = 0;
    ret = Fact(no)

    console.log("Factorial of Number is : ",ret);
}

main()