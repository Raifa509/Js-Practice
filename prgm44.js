// wap to print the common numbers from the given two arrays
p=[10,11,12,20,30];
q=[11,20,25,30,33];

let newArr=[];
for(let i=0;i<p.length;i++)
{
    for(let j=0;j<q.length;j++)
    {
        if(p[i]==q[j])
        {
           newArr.push(p[i]); 
        }
    }
}
console.log(newArr);

