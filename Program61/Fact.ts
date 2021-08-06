//creation of Class
export class OddFact 
{
    //Characteristics 
    No : number;
    i : number;
    fact : number;

    //Behaviour 
    constructor(x : number) 
    {
        this.No = x
        this.i = 0;
        this.fact = 1;
    }
    
    oddfact() : number
    {
        if(this.No < 0)
        {
            this.No = -this.No 
        }
        
        for(this.i = this.No;this.i > 0;this.i--)
        {
            if(this.i % 2 != 0)
            {
                this.fact = this.fact * this.i
            }
        }

        return this.fact
    }
}