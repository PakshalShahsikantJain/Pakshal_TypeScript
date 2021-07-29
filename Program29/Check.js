/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 28/07/2021
//  Program : Write a program which accept number from user and check whether it contains 0 in it or not.
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Check(No) {
    var Digit = 0;
    while (No != 0) {
        Digit = No % 10;
        if (Digit == 0) {
            break;
        }
        No = No / 10;
        No = Math.floor(No);
    }
    if (Digit == 0) {
        return true;
    }
    else {
        return false;
    }
}
function main() {
    console.log("Jay Ganesh.........");
    var No = 1687;
    var bret = true;
    bret = Check(No);
    if (bret == true) {
        console.log("Number Contains Zero");
    }
    else {
        console.log("Number Does Not Contains Zero");
    }
    return 0;
}
main();
