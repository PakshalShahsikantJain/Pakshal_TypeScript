//Creation of Class
export class Pattern
{
    //Characterstics 
    No : number 
    i : number 

    //Behaviour

    constructor(x : number) 
    {
        this.No = x;
        this.i = 0;
    }
    Display()
    {
        for(this.i = 0;this.i < this.No;this.i++)
        {
            process.stdout.write("*" + " ")
        }
        for(this.i = 0;this.i < this.No;this.i++)
        {
            process.stdout.write("#" + " ")
        }
    }

}