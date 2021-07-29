/////////////////////////////////////////////////////////////////////////////////////////
//
//  Author : Pakshal Shashikant Jain 
//  Date : 29/07/2021
//  Program : Write a program which accept distance in kilometre and convert it into meter. (1 
//            kilometre = 1000 Meter)
//
////////////////////////////////////////////////////////////////////////////////////////

function KmToM(KM : number) : number 
{
    `
    This Function is used To Convert KM To M
    :param : KM 
    :return : Meter
    `
    var Meter : number = 0;

    Meter = KM * 1000        //1 Km = 1000 M
    
    return Meter;
} 

///////////////////////////////////////////////////////////////////////////////////////////////////////////
function main() 
{
    console.log("Jay Ganesh.......")
    var KM : number = 5;
    var ret : number = 0;
    ret = KmToM(KM)

    console.log("%d KM Convereted into M is : ",KM,ret);

    return 0;
}

main()