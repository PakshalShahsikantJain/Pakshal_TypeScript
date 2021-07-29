////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shahikant Jain
//  Date : 28/07/2021
//  Program : Write a program which accept total marks & obtained marks from user and calculate percentage.
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Percentage(No, No2) {
    "\n    This Fucnction Percentage is Used To Calculate Percentage \n    :param : No\n    :param : No2\n    :return : ret(Percentage)\n    ";
    var ret = 0;
    ret = No2 / No * 100;
    return ret;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh.........");
    var No = 1000;
    var No2 = 745;
    var ret = 0;
    ret = Percentage(No, No2);
    console.log("Percentage is : %d %", ret);
}
main();
