///////////////////////////////////////////////////////////////////////////////////////////////
//
//  Auhtor : Pakshal Shashikant Jain
//  Date : 27/07/2021
//  Program : Write a program which accept number from user and display all its non factors
//
//////////////////////////////////////////////////////////////////////////////////////////////

function NonFactors(No : number)
{
    `
    This Fucntion is used to Display NonFactors of Given Number
    :param : No
    :return : Nothing 
    `
    var i : number = 0;

    console.log("Non Factors Of Number %d is : ",No)
    for(i = 1 ; i < No;i++)
    {
        if((No % i) != 0) 
        {
            process.stdout.write(i + " ");
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{   
    console.log("Jay Ganesh..........")
    var No : number = 13

    NonFactors(No);
}

main()
