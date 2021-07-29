/////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain 
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and print its numbers line. 
//
/////////////////////////////////////////////////////////////////////////////////////////////////
function Display(no) {
    var i = 0;
    for (i = -no; i <= no; i++) {
        process.stdout.write(i + " ");
    }
}
function main() {
    console.log("Jay ganesh.........");
    var no = 5;
    Display(no);
}
main();
