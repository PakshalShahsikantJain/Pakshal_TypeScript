//////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and display its table
//
//////////////////////////////////////////////////////////////////////////////////////

function TabelR(no : number) 
{
    `
    This Function Is Used To Display Table of Entered Number in Reverse Order
    :param : no
    :return : Nothing
    `
    var i : number = 0;
    var tabel : number = 0;

    console.log("Tabel of %d in Reverse Order is : ",no);
    
    if(no < 0)
    {
        no = - no;
    }

    for(i = 10;i > 0;i--)
    {
        tabel = no * i
        process.stdout.write(tabel + " ");
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh......")
    var no : number = -5;
    TabelR(no);

    return 0;
}

main()