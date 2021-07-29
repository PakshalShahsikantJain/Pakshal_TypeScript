//////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shaikant Jain
//  Date : 27/07/2021
//  Program : Write a program which accept name from user and print that name
//
//////////////////////////////////////////////////////////////////////////////////////////////////////

function DisplayName(str: string)
{
    `
    This Function is used to just Display Name Accepeted From user 
    :param: str
    :return : Nothing
    `
    console.log(str);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh..........")
    var name : string = "Pakshal Jain"
    DisplayName(name);
}

main()