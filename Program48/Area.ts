//////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal shashikant Jain 
//  Date : 29/07/2021
//  Program : Write a program which accept radius of circle from user and calculate its area. 
//            Consider value of PI as 3.14. (Area = PI * Radius * Radius) 
//
/////////////////////////////////////////////////////////////////////////////////////////////

function Area(Radius : number,pi : number = 3.14) : number
{
    `
    This Function is used To Calculate Area of Circle
    :param : Radius 
    :param : pi
    :return : area
    `
    var no : number = 0;
    var area : number = 0;

    area = pi * Radius * Radius;

    return area;

}

////////////////////////////////////////////////////////////////////////////////////////

function main()     
{
    console.log("Jay Ganesh.......")
    var Radius : number = 10.4;
    var ret : number = 0;

    ret = Area(Radius);
    console.log("Radius of Circle is : ",ret);

    return 0;
}

main()