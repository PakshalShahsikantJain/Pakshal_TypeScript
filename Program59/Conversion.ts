//Creation of Class

export class Convert
{
    /*
    This Class Is Used To Convert Foreign Currency To Indian Currency 
    */
    //Characteristics 
    No : number;
    ret : number;

    //Behaviour
    constructor(x : number)
    {
        this.No = x;
        this.ret = 0;
    } 

    DollarToINR() : number
    {
        this.ret = this.No * 74           // 1 Dollar = 70 ₹

        return this.ret;
    }
}