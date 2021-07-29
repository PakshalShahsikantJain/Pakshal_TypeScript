//////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and display its table
//
//////////////////////////////////////////////////////////////////////////////////////
function Tabel(no) {
    "\n    This Function Is Used To Display Table of Entered Number\n    :param : no\n    :return : Nothing\n    ";
    var i = 0;
    var tabel = 0;
    console.log("Tabel of %d is : ", no);
    if (no < 0) {
        no = -no;
    }
    for (i = 1; i <= 10; i++) {
        tabel = no * i;
        process.stdout.write(tabel + " ");
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh......");
    var no = 25;
    Tabel(no);
    return 0;
}
main();
