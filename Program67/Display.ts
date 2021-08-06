export class Pattern
{
    //Chracteristics 
    No : number 
    i : number

    //Beaviours
    constructor(x: number)
    {
        this.No = x;
        this.i = 0;
    }

    pattern() 
    {
        for(this.i = 1;this.i <= this.No;this.i++)
        {
            process.stdout.write(this.i * 2 + " ")
        }
    }
}