////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shahikant Jain
//  Date : 28/07/2021
//  Program : Write a program which accept total marks & obtained marks from user and calculate percentage.
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Percentage(No : number,No2 : number)
{
    `
    This Fucnction Percentage is Used To Calculate Percentage 
    :param : No
    :param : No2
    :return : ret(Percentage)
    `
    var ret : number = 0;

    ret = No2/No * 100;

    return ret;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh.........")
    var No : number = 1000;
    var No2 : number = 745;
    var ret : number = 0;

    ret = Percentage(No,No2)

    console.log("Percentage is : %d %",ret);
}

main()