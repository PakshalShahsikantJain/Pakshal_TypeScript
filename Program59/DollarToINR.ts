///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Jain
//  Date : 02/08/2021
//  Program : Accept amount in US dollar and return its corresponding value in Indian currency. 
//            Consider 1$ as 70 rupees.
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import {Convert} from './Conversion'

function main() 
{
    console.log("Jay Ganesh......")
    var ret : number = 0;

    //Creation of Objects
    var obj1 = new Convert(45)
    var obj2 = new Convert(2000)

    ret = obj1.DollarToINR()
    console.log("Conversion of Dollar To Rupees of Obj1 is : ",ret);

    ret = obj2.DollarToINR()
    console.log("Conversion of Dollar To Rupees of Obj2 is : ",ret);
}

main()