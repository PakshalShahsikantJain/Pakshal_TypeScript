////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shahikant Jain
//  Date : 27/07/2021
//  Program : Write a program which accept number from user and display its multiplication of factors.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function MultFact(No : number)
{
    `
    This Function is used To Find Out Mulitplication 
    of Factors of Entered Number 
    :param : No
    :return : Multiplication of Factors 
    `
    var i : number = 0;
    var Mult : number = 1;

    for(i = 0;i < No;i++)
    {
        if((No % i) == 0)
        {
            Mult = Mult * i
        }
    }

    return Mult;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh........")
    var No : number = 12;
    var ret : number = 0;

    ret = MultFact(No);

    console.log("Multiplication of Factors of Entered Number is : ",ret);
}

main()