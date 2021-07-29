//////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and display its table
//
//////////////////////////////////////////////////////////////////////////////////////
function TabelR(no) {
    "\n    This Function Is Used To Display Table of Entered Number in Reverse Order\n    :param : no\n    :return : Nothing\n    ";
    var i = 0;
    var tabel = 0;
    console.log("Tabel of %d in Reverse Order is : ", no);
    if (no < 0) {
        no = -no;
    }
    for (i = 10; i > 0; i--) {
        tabel = no * i;
        process.stdout.write(tabel + " ");
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh......");
    var no = -5;
    TabelR(no);
    return 0;
}
main();
