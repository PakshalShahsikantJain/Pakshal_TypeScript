export class Factorial
{
    //Characteristics 
    No : number;
    fact : number;
    i : number;

    //Behaviours 
    constructor(x : number)
    {
        this.No = x;
        this.fact = 1;
        this.i = 0;
    }

    Fact()
    {
        if(this.No < 0)
        {
            this.No = -this.No
        }
        
        for(this.i = this.No;this.i > 0;this.i--)
        {
            if((this.i % 2) == 0)
            {
                this.fact = this.fact * this.i
            }
        }
        return this.fact;
    }
}
