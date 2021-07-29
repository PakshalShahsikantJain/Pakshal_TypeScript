///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain 
//  Date :  29/07/2021
//  Program : Write a program which accept width & height of rectangle from user and calculate 
//            its area. (Area = Width * Height)
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
function Area(width, height) {
    "\n    This Function is Used To Calculate Area of Rectangle\n    :param : width \n    :param : height\n    :return : area\n    ";
    var area = 0;
    area = width * height;
    return area;
}
//////////////////////////////////////////////////////////////////////////////////
function main() {
    console.log("Jay Ganesh.........");
    var width = 5.3;
    var height = 9.78;
    var ret = 0;
    ret = Area(width, height);
    console.log("Area Of Rectangle is :", ret);
    return 0;
}
main();
