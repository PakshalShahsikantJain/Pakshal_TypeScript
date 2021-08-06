export class Addition
{
    //Characteristics
    no : number;
    no2 : number;
    i : number;
    sum : number;

    //Behaviour 
    constructor(x : number,y : number)
    {
        this.no = x;
        this.no2 = y;
        this.i = 0;
        this.sum = 0;
    }
    Add() : number
    {
        for(this.i = this.no;this.i <= this.no2;this.i++)
        {
            if(this.i % 2 == 0)
            {
                this.sum = this.sum + this.i;
            }
        }

        return this.sum
    }
}