/////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 29/07/2021
//  Program :  Write a program which accept number from user and count frequency of 2 in it. 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function CountTwo(No) {
    /*
    This Fucntion is used To Count Frequenct of 2 Present in Entered Number
    :param : No
    :return : icnt(Count)
    */
    var Digit = 0;
    var icnt = 0;
    while (No != 0) {
        Digit = No % 10;
        if (Digit == 2) {
            icnt++;
        }
        No = No / 10;
        No = Math.floor(No);
    }
    return icnt;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh.........");
    var No = 922432;
    var ret = 0;
    ret = CountTwo(No);
    console.log("Frequency of Number is : ", ret);
}
main();
