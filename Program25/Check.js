////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 28/07/2021
//  Program : Write a program which accept two numbers and check whether numbers are equal or not
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Check(No, No2) {
    "\n    This Function is Used To Check Whether two Numbers Entered are Equal or Not\n    :param : No\n    :param : No2\n    :return : boolean value(true/false) \n    ";
    if (No == No2) {
        return true;
    }
    else {
        return false;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh.......");
    var No = 10;
    var No2 = 12;
    var bret = false;
    bret = Check(No, No2);
    if (bret == true) {
        console.log("Numbers %d and %d are Equal", No, No2);
    }
    else {
        console.log("Numbers %d and %d are Not Equal", No, No2);
    }
}
main();
