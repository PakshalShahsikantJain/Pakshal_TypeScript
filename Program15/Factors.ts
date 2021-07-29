//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shaikant Jain
//  Date : 27/07/2021
//  Program : Accept one character from user and convert case of that character
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ConvertCase(ch : string) : string 
{
    `
    This Function Converts Character From UpperCase To LowerCase 
    :param : ch
    :return : Converted String
    `
    var char_value : number = 0;

    if((ch >= 'A')&&(ch <= 'Z'))
    {
        char_value = ch.charCodeAt(0);

        char_value = char_value + 32;

        ch = String.fromCharCode(char_value);
    }

    return ch;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh.........")
    var ch : string = 'A';
    var ret : string = ' ';

    ret = ConvertCase(ch);

    console.log("Converted Character is : ",ret);

    return 0;
}

main()