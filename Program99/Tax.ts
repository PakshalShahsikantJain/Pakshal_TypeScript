//Creation of Class 

export class TAX 
{
    //Chracterisitcs
    No : number
    tax : number

    //Behaviours 
    constructor(x : number)
    {
        this.No = x;
    }

    InTax()
    {
        if(this.No < 500000)
        {
            this.tax = 0;
            return this.tax;
        }
        else if((this.No > 500000)&&(this.No < 1000000))
        {
            this.tax = (this.No * 10) / 100;
            return this.tax;
        }
        else if((this.No > 1000000)&&(this.No < 2000000))
        {
            this.tax = (this.No * 15) / 100
            return this.tax;
        }
        else if(this.No > 2000000)
        {
            this.tax = (this.No * 30) / 100
            return this.tax
        }
    }
    
}