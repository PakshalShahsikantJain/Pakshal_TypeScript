/*
Author : Pakshal Jain 
Date : 06/08/2021
Program : Design application for income tax department to calculate tax
amount. According to the income tax department there is no
income tax for the income less than 5 lakhs.
If income is in between 5 to 10 lakhs then there will be 10% tax.
If income is in between 10 to 20 lakhs then there will be 20%
tax.
And for more than 20 lakhs there will be 30% tax.
We have to accept gross income from user and return the tax
amount.
*/
import {TAX} from './Tax'

function main() 
{
    console.log("Jay Ganesh.....")
    var ret : number = 0;

    //Creation of Objects 
    var obj = new TAX(450000)
    ret = obj.InTax()
    console.log("Your Have to pay Tax of about : ",ret,"₹");

    var obj2 = new TAX(600000)
    ret = obj2.InTax()
    console.log("Your Have to pay Tax of about : ",ret,"₹");

    var obj3 = new TAX(1200000)
    ret = obj3.InTax()
    console.log("Your Have to pay Tax of about : ",ret,"₹");

}

main()