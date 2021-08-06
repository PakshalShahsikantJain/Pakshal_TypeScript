//Creation of Class 

export class HOTEL 
{
    //Chracterisitcs
    No : number
    disc : number

    //Behaviours 
    constructor(x : number)
    {
        this.No = x;
    }

    discount()
    {
        if(this.No < 500)
        {
            this.disc = this.No;
            return this.disc;
        }
        else if((this.No > 500)&&(this.No < 1500))
        {
            this.disc = (this.No * 10) / 100;
            this.disc = this.No - this.disc;
            return this.disc;
        }
        else if(this.No > 1500)
        {
            this.disc = (this.No * 15) / 100
            this.disc = this.No - this.disc;
            return this.disc;
        }
    }
    
}