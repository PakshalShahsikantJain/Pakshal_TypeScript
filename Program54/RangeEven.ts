//////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakhshal Shashikant Jain
//  Date : 30/07/2021
//  Program : Write a program which accept range from user and display all even numbers in 
//            between that range
//
//////////////////////////////////////////////////////////////////////////////////////////

function RangeEven(no : number,no2 : number)
{
    `
    This Funciton is used To Print Numbers Between Entered Range
    :param : no
    :param : no2
    :return : Nothing
    `
    var i : number = 0;

    if(no > no2) 
    {
        console.log("Invalid Range")
    }

    for(i = no;i <= no2;i++)
    {
        if(i % 2 == 0)
        {
            process.stdout.write(i + " ")
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh......")
    var no : number = 23
    var no2 : number = 35

    RangeEven(no,no2)
}

main()