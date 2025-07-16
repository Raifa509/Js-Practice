// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(row=1;row<=5;row++)
{
    str=""
    for(col=1;col<=5;col++)
    {
        if(row==1 || row==5 || col==1 || col==5)
        {
            str+="* "
        }
        else{
            str+="  "
        }
    }
    console.log(str);
    
}