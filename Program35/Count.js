//////////////////////////////////////////////////////////////////////////////////////////////////
// 
//  Author : Pakshal Shashikant Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and return the count of digits in 
//            between 3 and 7.
//
//////////////////////////////////////////////////////////////////////////////////////////////////
function Count(no) {
    "\n    This Function is Used To Count Digits of A Number Which are in between 3 and 7\n    :param : no\n    :return : icnt\n    ";
    var Digit = 0;
    var icnt = 0;
    while (no != 0) {
        Digit = no % 10;
        if ((Digit > 3) && (Digit < 7)) {
            icnt++;
        }
        no = no / 10;
        no = Math.floor(no);
    }
    return icnt;
}
//////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh......");
    var no = 4521;
    var ret = 0;
    ret = Count(no);
    console.log("Count of Digits ini Between 3 and 7 is : ", ret);
}
main();
