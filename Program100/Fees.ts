export class Standard 
{
    //Characterisitcs 
    No : number 
    fees : number
    arr : number[]

    //Behaviours 
    constructor(x : number)
    {
        this.No = x;
        this.fees = 0;
        this.arr = [];
    }

    standard()
    {
        this.arr = [0,8900,12790,21000,23450];
        var i : number = 1;

        for(i = 1;i <= this.arr.length;i++)
        {
            if(i == this.No)
            {
                break;
            }
        }

        return this.arr[i];
    }
}