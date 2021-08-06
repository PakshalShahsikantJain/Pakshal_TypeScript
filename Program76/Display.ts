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
        for(this.i = this.Row;this.i > 0;this.i--)
        {
            for(this.j = 0;this.j <= this.Col;this.j++)
            {
                process.stdout.write(this.i + " ")
            }
            console.log()
        }
    }
}