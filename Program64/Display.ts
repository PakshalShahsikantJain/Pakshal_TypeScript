//Creation of Class 
export class Pattern
{
    //Characteristics 
    No : number 
    i : number 

    //Behaviour 
    constructor(x : number)
    {
        this.No = x
        this.i = 0;
    }

    pattern()
    {
        for(this.i = this.No;this.i > 0 ;this.i--)
        {
            process.stdout.write(this.i +" "+ "#" + " ");
        }
    }
}