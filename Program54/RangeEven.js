//////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakhshal Shashikant Jain
//  Date : 30/07/2021
//  Program : Write a program which accept range from user and display all even numbers in 
//            between that range
//
//////////////////////////////////////////////////////////////////////////////////////////
function RangeEven(no, no2) {
    "\n    This Funciton is used To Print Numbers Between Entered Range\n    :param : no\n    :param : no2\n    :return : Nothing\n    ";
    var i = 0;
    if (no > no2) {
        console.log("Invalid Range");
    }
    for (i = no; i <= no2; i++) {
        if (i % 2 == 0) {
            process.stdout.write(i + " ");
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh......");
    var no = 23;
    var no2 = 35;
    RangeEven(no, no2);
}
main();
