///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 28/ 07/ 2021
//  Program : Write a program which accept three numbers and print its multiplication
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Mult(No : number,No2 : number,No3 : number) : number
{   
    `
    This Function is Used To Calculate Multiplication io Three Numbers
    :param : No 
    :param : No2
    :param : No3
    :return : Mult
    `
    var Mult : number = 0;

    if((No == 0)&&(No2 == 0)) 
    {
        No = 1
        No2 = 1
    }
    else if((No2 == 0)&&(No3 == 0))
    {
        No2 = 1
        No3 = 1
    }
    else if((No == 0)&&(No3 == 0))
    {
        No = 1
        No3 = 1
    }
    else if(No == 0)
    {
        No = 1
    }
    else if(No2 == 0)
    {
        No2 = 1
    }    
    else if(No3 == 0)
    {
        No3 = 1
    }

    Mult = No * No2 * No3;

    return Mult
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh......")
    var No : number = 5
    var No2 : number = 7
    var No3 : number = 0
    var ret : number = 0;

    ret = Mult(No,No2,No3);

    console.log("Multiplication of Numbers is : ",ret)
}

main()