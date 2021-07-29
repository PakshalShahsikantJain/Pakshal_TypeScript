/////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain
//  Date : 29/07/2021
//  Program : Write a program which accept N and print first 5 multiples of N
//
/////////////////////////////////////////////////////////////////////////////////////////////////
function Display(no) {
    "\n    This Function is Just used To Display First Five Multiples of Entered number\n    :param : no \n    :return : nothing\n    ";
    var i = 0;
    var Mult = 0;
    console.log("First Five Multiples of Number %d is : ", no);
    if (no < 0) {
        no = -no;
    }
    for (i = 1; i <= 5; i++) {
        Mult = no * i;
        process.stdout.write(Mult + " ");
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh........");
    var no = 4;
    Display(no);
}
main();
