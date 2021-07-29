///////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shahikant Jain
//  Date : 28/07/2021
//  Program : Write a program which accept number from user and return the count of even digits.
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
function Even(no) {
    "\n    This function is used to Count Even Digits of Entered Number\n    :param : no\n    :return : icnt\n    ";
    var Digit = 0;
    var icnt = 0;
    if (no < 0) {
        no = -no;
    }
    while (no != 0) {
        Digit = no % 10;
        if (Digit % 2 == 0) {
            icnt++;
        }
        no = no / 10;
        no = Math.floor(no);
    }
    return icnt;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh.....");
    var no = 8462;
    var ret = 0;
    ret = Even(no);
    console.log("Count of Even Digits is :", ret);
    return 0;
}
main();
