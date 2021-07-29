/////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain 
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and print its numbers line. 
//
/////////////////////////////////////////////////////////////////////////////////////////////////

function Display(no : number) 
{
    `
    This Function is used To Just Display Number line of Entered Number 
    :param : no
    :return : Nothing
    `
    var i : number = 0;

    for(i = -no;i <= no;i++)
    {
        process.stdout.write(i + " ");
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay ganesh.........");

    var no : number = 5; 
    Display(no);
}

main()
