//             11
//          12 13 14 
//       15 16 17 18 19
//    20 21 22 23 24 25 26
// 27 28 29 30 31 32 33 34 35

count=11
for(row=1;row<=5;row++)
{
   
    str=""
    for(space=5;space>=row;space--)
    {
        str+="   "
    }
    for(col=1;col<=row+(row-1);col++)
    {
       str+=count+" "
       count++
          
    }
    console.log(str);
    
}