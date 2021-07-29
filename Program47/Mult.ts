/////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 29/07/2021
//  Program : Write a program which accept N and print first 5 multiples of N
//
/////////////////////////////////////////////////////////////////////////////////////////////////
function Display(no : number)
{
    `
    This Function is Just used To Display First Five Multiples of Entered number
    :param : no 
    :return : nothing
    `
    var i : number = 0;
    var Mult : number = 0;

    console.log("First Five Multiples of Number %d is : ",no);

    if(no < 0)
    {
        no = -no
    }
    for(i = 1; i <= 5;i++)
    {
        Mult = no * i;
        process.stdout.write(Mult + " ")
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
function main() 
{
    console.log("Jay Ganesh........")
    var no : number = 4;

    Display(no);
}

main()