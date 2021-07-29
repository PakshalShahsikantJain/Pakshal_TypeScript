/////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 27/07/2021
//  Program : Write a program which accept number from user and return difference between 
//            summation of all its factors and non factors.
//
///////////////////////////////////////////////////////////////////////////////////////

function Difference(No : number) : number  
{
    `
    This Function is Used To Calculate Difference Between Factors and Non-Factors
    of Entered Number 
    :param : No
    :return : Difference(sum - sum2)
    `
    var i : number = 0;
    var sum : number = 0;
    var sum2 : number = 0;

    for(i = 1;i < No;i++)
    {
        if(No % i == 0)
        {
            sum = sum + i;
        }
        else 
        {
            sum2 = sum2 + i;
        }
    }

    return sum - sum2;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh.........")
    var No : number = 10;
    var ret : number = 0;

    ret = Difference(No);

    console.log("Difference Between summation of Factors and NonFactors of Entered Number %d is : ",No,ret);

    return 0;
}

main()