////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shahikant Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and 
//            print numbers till that number
//
////////////////////////////////////////////////////////////////////////////////////////////////
function Display(no : number)
{
    `
    This Function is used To Display Numbers Till That Number
    :param : no 
    :return : Nothing
    `
    var i : number = 0;

    for(i = 1;i <= no;i++)
    {
        process.stdout.write(i + " ");
    }
}

///////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh......")
    var no : number = 8;

    Display(no);
}

main()