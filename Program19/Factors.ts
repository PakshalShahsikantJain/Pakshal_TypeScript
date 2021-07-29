//////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashiakant Jain
//  Date : 27/07/2021
//  Program : Write a program which accept number from user and display its factors in decreasing order
//
///////////////////////////////////////////////////////////////////////////////////////////////////////

function Factors(No : number) 
{   
    var i : number = 0

    for(i = No / 2;i > 0;i--)
    {
        if(No % i == 0)
        {
            process.stdout.write(i + "\t")
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
function main() 
{
    console.log("Jay Ganesh...................")

    var No : number = 10

    Factors(No);
}

main()