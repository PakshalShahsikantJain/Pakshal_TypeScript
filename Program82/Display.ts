//Creatio of Class
export class Pattern 
{
    //Characteristisc
    Row : number 
    Col : number 
    i : number 
    j : number 
    no : number 

    //Behaviours 
    constructor(x : number,y : number)
    {
        this.Row = x;
        this.Col = y;
        this.i = 0;
        this.j = 0;
        this.no = 1;
    }

    pattern() 
    {
        for(this.i = 1;this.i <= this.Row;this.i++)
        {
            for(this.j = 1;this.j <= this.Col;this.j++)
            {
                process.stdout.write(this.no + " ");
                this.no = this.no + 1;
            }
            this.no = this.no - 3;
            console.log();
        }
    }
}