//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shahikant Jain
//  Date : 28/07/2021
//  Program : Write a program which accept one number from user and check whether that number is greater than 100 or not.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Check(no : number) : boolean 
{
    `
    This Fucntion is used to Check Whether 
    Entered Number is Greater Than 100 or Not 
    :param : no 
    :return : boolean value(True or False)
    `
    if(no > 100)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
function main() 
{
    console.log("Jay Ganesh....");

    var no : number = 89;
    var bret : boolean = false;

    bret = Check(no);

    if(bret == true)
    {
        console.log("Number %d is Greater Than 100 : ",no);
    }
    else
    {
        console.log("Number %d is Less Than 100 : ",no);
    }
}

main()