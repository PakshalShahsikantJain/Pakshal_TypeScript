/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Auhtor : Pakshal Shashikant Jain
//  Date : 27/07/2021
//  Program : Write a program which accept number from user and return summation of all its non factors
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function NonFactors(No : number) : number 
{
    `
    This is Function is Used To Calculate Summation of
    NonFactors of Given Number
    :param : No
    :return : sum 
    `
    var sum : number = 0;
    var i : number  = 0;

    for(i = 1; i < No;i++)
    {
        if(No % i != 0)
        {
            sum = sum + i;
        }
    }

    return sum;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh...............");
    var No : number = 10;
    var ret : number = 0;

    ret = NonFactors(No);

    console.log("Addition of NonFactors of Entered Number %d is : ",No,ret);

    return 0;
}

main()

