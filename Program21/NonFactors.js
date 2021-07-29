/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Auhtor : Pakshal Shashikant Jain
//  Date : 27/07/2021
//  Program : Write a program which accept number from user and return summation of all its non factors
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function NonFactors(No) {
    "\n    This is Function is Used To Calculate Summation of\n    NonFactors of Given Number\n    :param : No\n    :return : sum \n    ";
    var sum = 0;
    var i = 0;
    for (i = 1; i < No; i++) {
        if (No % i != 0) {
            sum = sum + i;
        }
    }
    return sum;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh...............");
    var No = 10;
    var ret = 0;
    ret = NonFactors(No);
    console.log("Addition of NonFactors of Entered Number %d is : ", No, ret);
    return 0;
}
main();
