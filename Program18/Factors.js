////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shahikant Jain
//  Date : 27/07/2021
//  Program : Write a program which accept number from user and display its multiplication of factors.
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function MultFact(No) {
    var i = 0;
    var Mult = 1;
    for (i = 0; i < No; i++) {
        if ((No % i) == 0) {
            Mult = Mult * i;
        }
    }
    return Mult;
}
function main() {
    console.log("Jay Ganesh........");
    var No = 12;
    var ret = 0;
    ret = MultFact(No);
    console.log("Multiplication of Factors is : ", ret);
}
main();
