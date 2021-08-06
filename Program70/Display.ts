//creation of Class

export class Pattern
{
    //Characteristics 
    Row: number 
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
        console.log("Output : ")
        for(this.i = 1;this.i <= this.Row;this.i++)
        {
            for(this.j = this.Col;this.j > 0;this.j--)
            {
                process.stdout.write(this.j + " ");
            }
            console.log();
        }
    }
}