/////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 29/07/2021
//  Program :  Write a program which accept number from user and count frequency of 4 in it. 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function CountFour(No : number) : number 
{   
    /*
    This Fucntion is used To Count Frequenct of 4 Present in Entered Number
    :param : No
    :return : icnt(Count)   
    */  
    var Digit : number = 0;
    var icnt : number = 0;

    while(No != 0)
    {
        Digit = No % 10
        if(Digit == 4)
        {
            icnt++;
        }
        No = No / 10
        No = Math.floor(No)
    }

    return icnt;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh.........")
    var No : number = 922432
    var ret : number = 0;

    ret = CountFour(No);
    console.log("Frequency of 4 in Entered Number is : ",ret);
}

main()