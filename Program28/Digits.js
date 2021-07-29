//////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain    
//  Date : 29/07/2021
//  Program : Write a program which accept total marks & obtained marks from user and calculate percentage.
//
/////////////////////////////////////////////////////////////////////////////////////////////////////
function Digits(No) {
    var Digit = 0;
    while (No != 0) {
        Digit = No % 10;
        console.log(Digit);
        No = No / 10;
        No = Math.floor(No);
    }
}
function main() {
    console.log("Jay Ganesh....");
    var No = 2395;
    Digits(No);
}
main();
