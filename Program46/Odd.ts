//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shaikant Jain
//  Date : 29/07/2021
//  Program :  Write a program which accepts N from user and print all odd numbers up to N.
//
/////////////////////////////////////////////////////////////////////////////////////////////

function Display(no : number) 
{
    `
    This Fucntion is Used To Just Dispaly Odd Number Till Entered Number
    :param : no
    :return : nothing
    `
    var i : number = 0;

    for(i = 0;i <= no;i++)
    {
        if(i % 2 == 1)
        {
            process.stdout.write(i + " ")
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh..........")
    var no : number = 20;
    Display(no);
}

main()