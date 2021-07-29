//////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and display its table
//
//////////////////////////////////////////////////////////////////////////////////////

function Tabel(no : number) 
{
    `
    This Function Is Used To Display Table of Entered Number
    :param : no
    :return : Nothing
    `
    var i : number = 0;
    var tabel : number = 0;

    console.log("Tabel of %d is : ",no);
    
    if(no < 0)
    {
        no = - no;
    }

    for(i = 1;i <= 10;i++)
    {
        tabel = no * i
        process.stdout.write(tabel + " ");
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh......")
    var no : number = 25;
    Tabel(no);

    return 0;
}

main()