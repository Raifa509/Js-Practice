// 1
// 0 1
// 1 0 1
// 0 1 0 1

for(row=1;row<=4;row++)
{
    str=""
    for(col=1;col<=row;col++)
    {
        if(row==col || col-row==2 || row-col==2)
        {
            str+='1 '
        }
        else{
            str+='0 '
        }
    }
    console.log(str);
    
}