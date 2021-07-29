/////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 29/07/2021
//  Program :  Write a program which accept number from user and count frequency of such a digits 
//              which are less than 6.. 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function Count(No) {
    /*
    This Fucntion is used To Count Frequenct of Digits Which are Less Than 6
    Present in Entered Number
    :param : No
    :return : icnt(Count)
    */
    var Digit = 0;
    var icnt = 0;
    while (No != 0) {
        Digit = No % 10;
        if (Digit < 6) {
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
    var No = 1018;
    var ret = 0;
    ret = Count(No);
    console.log("Frequency of Digits Which are less Than 6,Present in Entered Number is : ", ret);
}
main();
