//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal shashikant Jain 
//  Date : 29/07/2021
//  Program : Write a program which accept radius of circle from user and calculate its area. 
//            Consider value of PI as 3.14. (Area = PI * Radius * Radius) 
//
/////////////////////////////////////////////////////////////////////////////////////////////
function Area(Radius, pi) {
    if (pi === void 0) { pi = 3.14; }
    var no = 0;
    var area = 0;
    area = pi * Radius * Radius;
    return area;
}
function main() {
    console.log("Jay Ganesh.......");
    var Radius = 10.4;
    var ret = 0;
    ret = Area(Radius);
    console.log("Radius of Circle is : ", ret);
    return 0;
}
main();
