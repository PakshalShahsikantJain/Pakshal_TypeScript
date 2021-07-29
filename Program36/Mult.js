////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and return 
//            multiplication of all digits.
//
////////////////////////////////////////////////////////////////////////////////////
function DigitMulti(no) {
    "\n    This Function is Calculate Multiplication of Digits of Number\n    :param : no\n    :return : Mult\n    ";
    var Digit = 0;
    var Mult = 1;
    while (no != 0) {
        Digit = no % 10;
        if (Digit == 0) {
            Digit = 1;
        }
        Mult = Mult * Digit;
        no = no / 10;
        no = Math.floor(no);
    }
    return Mult;
}
////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh......");
    var no = 922432;
    var ret = 0;
    ret = DigitMulti(no);
    console.log("Multiplication of Digits of A Number %d is : ", no, ret);
    return 0;
}
main();
