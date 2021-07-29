/////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and if number is less than 50 
//            then print small , if it is greater than 50 and less than 100 then print medium, if it is 
//            greater than 100 then print large
//
////////////////////////////////////////////////////////////////////////////////////

function Check(No : number)
{
    `
    This Function is used To Just Display Whether Number is Small,Medium or Large
    :param : No
    :return : Nothing
    `
    if(No < 50)
    {
        console.log("Small")
    }
    else if((No > 50)&&( No < 100))
    {
        console.log("Medium")
    }
    else 
    {
        console.log("Large")
    }
}
function main() 
{
    console.log("Jay Ganesh.....")
    var no : number = 101;
    Check(no);

    return 0;
}

main()