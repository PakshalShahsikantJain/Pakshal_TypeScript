//////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain    
//  Date : 29/07/2021
//  Program : Write a program which accept total marks & obtained marks from user and calculate percentage.
//
/////////////////////////////////////////////////////////////////////////////////////////////////////

function Digits(No : number) 
{
    /*
    This Function is used To Used To Just Display Digits of a Number in Reverse Order
    :param : No
    :return : Nothing
    */
    var Digit : number = 0;

    while(No != 0)
    {
        Digit = No % 10
        console.log(Digit)
        No = No / 10
        No = Math.floor(No)
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh....")
    var No : number = 2395;

    Digits(No)
}

main()