/////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and print 
//            that number of $ & * on screen
//
///////////////////////////////////////////////////////////////////////////////
function Pattern(no) {
    "\n    This Function is Used To Just Display Pattern Which User Wants\n    :param : no\n    :rturn : Nothing\n    ";
    var i = 0;
    for (i = 0; i < no; i++) {
        process.stdout.write("$" + "\t" + "*" + "\t");
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh.....");
    var no = 3;
    Pattern(no);
}
main();
