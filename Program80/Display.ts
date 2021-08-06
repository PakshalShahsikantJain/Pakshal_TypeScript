//Creation of Class
export class Pattern
{
    //Characteristics
    Row : number 
    Col : number 
    i : number 
    j : number 
    ch : string
    Ascii : number 

    //Behaviours 
    constructor(x : number,y : number)
    {
        this.Row = x;
        this.Col = y;
        this.ch = 'a';
        this.Ascii =0;

        this.i = 0;
        this.j = 0;
    }

    pattern() 
    {
        this.Ascii = this.ch.charCodeAt(0)

        for(this.i = 1;this.i <= this.Row;this.i++)
        {
            for(this.j = 1;this.j <= this.Col;this.j++)
            {
                if(this.i % 2 != 0)
                {
                    process.stdout.write(String.fromCharCode(this.Ascii) + " ");
                    this.Ascii = this.Ascii + 1;
                }
                else 
                {
                    process.stdout.write(this.j + " ");
                }
            }
            this.Ascii = this.ch.charCodeAt(0);
            console.log();
        }
    }
}