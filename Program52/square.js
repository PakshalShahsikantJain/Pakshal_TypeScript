///////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain 
//  Date : 30/07/2021
//  Program : Write a program which accept area in square feet and convert it into square 
//            meter. (1 square feet = 0.0929 Square meter)
//
////////////////////////////////////////////////////////////////////////////////////////////
function Square(no) {
    "\n    This Function is Used To Convert Square Feet into Square Meter\n    :param : no\n    :return : squareMeter \n    ";
    var squareMeter = 0;
    squareMeter = no * 0.0929; // 1 Square Feet = 0.0929 SquareMeter
    return squareMeter;
}
function main() {
    console.log("Jay Ganesh........");
    var no = 7;
    var ret = 0;
    ret = Square(no);
    console.log("%d SquareFeet Converted into SqaureMeter is : ", no, ret);
    return 0;
}
main();
