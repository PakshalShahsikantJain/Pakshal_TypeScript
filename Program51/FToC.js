/////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shahikant Jain
//  Date : 30/07/2021
//  Program : Write a program which accept temperature in Fahrenheit and convert it into 
//            celsius. (1 celsius = (Fahrenheit -32) * (5/9))
//
//////////////////////////////////////////////////////////////////////////////////////////
function FToC(no) {
    "\n    This Function is used To Convert Temperature From Fahrenheit To Celcius\n    :param : no \n    :return : Converted Value\n    ";
    var cel = 0;
    cel = (no - 32) * (5 / 9);
    return cel;
}
////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh........");
    var no = 34;
    var ret = 0;
    ret = FToC(no);
    console.log("Temperature From %d Fahrenheit To Celecius Convereted is : ", no, ret);
}
main();
