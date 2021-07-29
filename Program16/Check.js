//////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shaishikant Jain
//  Date : 27/07/2021
//  Program : Accept on character from user and check whether that character is vowel (a,e,i,o,u) or not.
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckVowel(ch) {
    "\n    This Function Checks Whether Enterd String is Vowel or Not\n    :param : ch \n    :return : boolean value True or False\n    ";
    if ((ch == 'a') || (ch == 'e') || (ch == 'i') || (ch == 'o') || (ch == 'u')) {
        return true;
    }
    else if ((ch == 'A') || (ch == 'E') || (ch == 'I') || (ch == 'O') || (ch == 'U')) {
        return true;
    }
    else {
        return false;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh.............");
    var ch = 'E';
    var ret = false;
    ret = CheckVowel(ch);
    if (ret == true) {
        console.log("Entered String is Vowel");
    }
    else {
        console.log("Entered String is Not A Vowel");
    }
    return 0;
}
main();
