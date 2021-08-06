///////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Sashikant
//  Date : 30/07/2021
//  Program : Write a program which accept range from user and display all numbers in between 
//            that range
//
///////////////////////////////////////////////////////////////////////////////////////////////

function range(no : number,no2 : number)
{
    var i : number = 0;
    
    if(no > no2) 
    {
        console.log("Invalid Range");
    }

    for(i = no;i <= no2;i++)
    {
        process.stdout.write(i + " ");
    }
}
function main() 
{
    console.log("Jay Ganesh........")
    var no : number = 22;
    var no2 : number = 35;

    range(no,no2);
}

main()

