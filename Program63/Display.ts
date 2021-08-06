export class Display 
{
    //Charcterstics
    no : number
    ch : string 
    AsciiChar : number 
    i : number;
    //Behaviour
    constructor(x : number,y : string)
    {
        this.no = x
        this.ch = y
        this.AsciiChar = 0;
        this.i = 0;
    }

    pattern()
    {
        process.stdout.write(this.ch + " ")
        for(this.i = 0;this.i < this.no;this.i++ )
        {
            this.AsciiChar = this.ch.charCodeAt(0)
            
            this.AsciiChar = this.AsciiChar + 1

            this.ch = String.fromCharCode(this.AsciiChar)
            process.stdout.write(this.ch + " ")
        }
    }
}