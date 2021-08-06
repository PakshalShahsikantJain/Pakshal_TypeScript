/*
Author : Pakshal Jain 
Date : 06/08/2021
Program : Design application for hotel. According to the management
team of hotel they are giving discount on total bill amount of
customer.
If bill bill amount is less than 500 then there is no discount , if
bill amount is less than 1500 and more than 500 they give 10%
discount.
And if the bill amount is more than 1500 then they give 15%
discount.
Our application should accept total bill amount and depends on
the discount policy we have to return the amount after applying
discount
*/
import {HOTEL} from './Discount'

function main() 
{
    console.log("Jay Ganesh.....")
    console.log("------Welcome To Grand Hotel---------");
    var ret : number = 0;

    //Creation of Objects 
    var obj = new HOTEL(1200)
    ret = obj.discount()
    console.log("Your Final Bill Amount After Discount is : ",ret);
    console.log("-----------Thank You Visit Again!!!!-----------");

    var obj2 = new HOTEL(290)
    ret = obj2.discount()
    console.log("\nYour Final Bill Amount After Discount is : ",ret);
    console.log("-----------Thank You Visit Again!!!!-----------");

    var obj3 = new HOTEL(3700)
    ret = obj3.discount()
    console.log("\nYour Final Bill Amount After Discount is : ",ret);
    console.log("-----------Thank You Visit Again!!!!-----------");
}

main()