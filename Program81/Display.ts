//Creation of CLass 
export class Pattern 
{
    //Characteristics
    Row : number 
    Col : number 
    i : number 
    j : number 

    //Behaviours 
    constructor(x : number,y : number)
    {
        this.Row = x;
        this.Col = y;
        this.i = 0;
        this.j = 0;
    }

    pattern()
    {
        for(this.i = 1;this.i <= this.Row;this.i ++)
        {
            for(this.j = 1;this.j <= this.Col;this.j++)
            {
                if(this.i % 2 != 0)
                {
                    process.stdout.write(" " +this.j + " ")
                }
                else 
                {
                    process.stdout.write(-this.j + " ")
                }
            }
            console.log()
        }
    }
}