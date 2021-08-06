//Creation of Class

export class Pattern
{
    //Characteristics
    Row : number
    Col : number  
    i : number
    j : number 
    ch : string 
    char : number

    //Behaviours
    constructor(x :number,y : number)
    {
        this.Row = x;
        this.Col = y;
        this.ch = 'A';
        this.char = 0;
        this.i = 0;
        this.j = 0;
    } 

    pattern() 
    {
        this.char = this.ch.charCodeAt(0)

        for(this.i = 1;this.i <= this.Row;this.i++)
        {
            for(this.j = 1;this.j <= this.Col;this.j++)
            {
                process.stdout.write(String.fromCharCode(this.char) + " ");
                this.char = this.char + 1;
            }
            this.char = this.ch.charCodeAt(0);
            console.log();
            //this.char = this.char + 1
        }
    }

}