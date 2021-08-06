// Creation of Class
export class Add 
{
    //Chracteristics
    No : number;
    No2 : number;
    sum : number;
    i : number;

    // Behaviours
    constructor(x : number,y : number)
    {
        this.No = x;
        this.No2 = y;
        this.i = 0;
        this.sum = 0;
    }
    Addition()
    {
        if((this.No < 0)||(this.No2 < 0))
        {
            return -1
        }
        else if(this.No > this.No2)
        {
            console.log("Invalid Range");
        }

        for(this.i = this.No;this.i <= this.No2;this.i++)
        {
            this.sum = this.sum + this.i 
        }
        
        return this.sum;
    }
}
