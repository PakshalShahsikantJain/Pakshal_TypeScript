////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and return the count of odd digits
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Odd(no) {
    "\n    This Function is used To Count Odd Digits of Entered Number\n    :param : no\n    :return : icnt\n    ";
    var Digit = 0;
    var icnt = 0;
    while (no != 0) {
        Digit = no % 10;
        if (Digit % 2 == 1) {
            icnt++;
        }
        no = no / 10;
        no = Math.floor(no);
    }
    return icnt;
}
/////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh..........");
    var no = 2395;
    var ret = 0;
    ret = Odd(no);
    console.log("Count of Odd Digits of Entered Number is : ", ret);
    return 0;
}
main();
