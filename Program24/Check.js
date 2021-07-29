//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shahikant Jain
//  Date : 28/07/2021
//  Program : Write a program which accept one number from user and check whether that number is greater than 100 or not.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Check(no) {
    "\n    This Fucntion is used to Check Whether \n    Entered Number is Greater Than 100 or Not \n    :param : no \n    :return : boolean value(True or False)\n    ";
    if (no > 100) {
        return true;
    }
    else {
        return false;
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh....");
    var no = 89;
    var bret = false;
    bret = Check(no);
    if (bret == true) {
        console.log("Number %d is Greater Than 100 : ", no);
    }
    else {
        console.log("Number %d is Less Than 100 : ", no);
    }
}
main();
