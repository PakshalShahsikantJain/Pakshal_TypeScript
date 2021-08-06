/////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shahikant Jain
//  Date : 30/07/2021
//  Program : Write a program which accept temperature in Fahrenheit and convert it into 
//            celsius. (1 celsius = (Fahrenheit -32) * (5/9))
//
//////////////////////////////////////////////////////////////////////////////////////////

function FToC(no : number) 
{
    `
    This Function is used To Convert Temperature From Fahrenheit To Celcius
    :param : no 
    :return : Converted Value
    `
    var cel : number = 0;

    cel = (no - 32) * (5/9);

    return cel
}

////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh........")
    var no : number = 34;
    var ret : number = 0;

    ret = FToC(no);
    console.log("Temperature From %d Fahrenheit To Celecius Convereted is : ",no,ret);
}

main()