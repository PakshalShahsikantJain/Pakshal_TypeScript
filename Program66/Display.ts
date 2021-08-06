export class Pattern
{
    //Characteristics
    No : number 
    i : number 

    //Behaviours 
    constructor(x : number)
    {
        this.No = x;
        this.i = 0;
    }

    pattern()
    {
        for(this.i = 1;this .i <= this.No;this.i++)
        {
            process.stdout.write("#" + " " + this.i + " " + "*" + " ")
        }

    }
}