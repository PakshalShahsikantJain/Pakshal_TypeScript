// Creation of Class

export class DisplayR
{
    //Characteristics
    No : number
    No2 : number
    i : number

    //Behaviour
    constructor(x : number,y : number)
    {
        this.No = x;
        this.No2 = y;
        this.i = 0;
    }
    Display()
    {
        for(this.i = this.No2;this.i >= this.No;this.i--)
        {
            process.stdout.write(this.i + " ")
        }
        console.log(" ")
    }

}