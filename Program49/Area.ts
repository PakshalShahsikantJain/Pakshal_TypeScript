///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain 
//  Date :  29/07/2021
//  Program : Write a program which accept width & height of rectangle from user and calculate 
//            its area. (Area = Width * Height)
//
///////////////////////////////////////////////////////////////////////////////////////////////////////

function Area(width : number,height : number)
{
    `
    This Function is Used To Calculate Area of Rectangle
    :param : width 
    :param : height
    :return : area
    `
    var area : number = 0;

    area = width * height;

    return area;
}

//////////////////////////////////////////////////////////////////////////////////

function main() 
{
    console.log("Jay Ganesh.........")
    var width : number = 5.3
    var height : number = 9.78
    var ret : number = 0;

    ret = Area(width,height);
    console.log("Area Of Rectangle is :",ret);

    return 0;
}

main()