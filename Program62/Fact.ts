//Creation of Class
export class DiffFact
{
    //Characterstics
    No : number 
    i : number 
    Efact : number 
    Ofact : number 
    difference : number
    //Behaviour 
    constructor(x : number)
    {
        this.No = x
        this.i = 0;
        this.Efact = 1;
        this.Ofact = 1;
        this.difference = 0;
    }

    Dfact()
    {
        for(this.i = this.No;this.i > 0;this.i--)
        {
            if(this.i % 2 == 0)
            {
                this.Efact = this.Efact * this.i
            }
            else 
            {
                this.Ofact = this.Ofact * this.i
            }
        }
        this.difference = this.Efact - this.Ofact

        return this.difference
    }
}