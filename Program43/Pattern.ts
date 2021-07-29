/////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shahsikant Jain
//  Date : 29/07/2021
//  Program : Write a program which accept number from user and print 
//            that number of $ & * on screen
//
///////////////////////////////////////////////////////////////////////////////

function Pattern(no : number)
{
    `
    This Function is Used To Just Display Pattern Which User Wants
    :param : no
    :rturn : Nothing
    `
    var i : number = 0;

    for(i = 0;i < no;i++)
    {
        process.stdout.write("$" + "\t" + "*"+ "\t");
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function main() 
{
    console.log("Jay Ganesh.....")
    var no : number = 3;

    Pattern(no);
}

main()