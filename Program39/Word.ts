////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 29/07/2021
//  Program : Accept single digit number from user and print it into word
//
////////////////////////////////////////////////////////////////////////////////////

function DigitWord(No : number) : string
{
    `
    This Function is Used Just TO Print Single Digit Number into Word
    :param : No
    :return : Word
    `
    var arr : string[] = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
    
    return arr[No];
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh......")
    var no : number = -3;
    var ret : string = " ";

    if(no > 9)
    {
        console.log("Invlaid Number")
        return -1;
    }

    if(no < 0)
    {
        no = -no
    }
    ret = DigitWord(no);
    console.log("Single Digit Number %d Printed into word : ",no,ret);
}

main()