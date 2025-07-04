// write a prgm to print the following output for the given input
// i/p=[4,5,6] o/p=[11,10,9]

a=[4,5,6]
arr=[]
sum=0
for(let item of a)
{
    sum+=item;
}
for(let item of a)
{
    arr.push(sum-item);   
}
console.log(arr);

console.log('----------------');

a=[4,5,6]
arr=[]
for(let item of a)
{
    arr.unshift(item+5);
}
console.log(arr);

console.log('----------------');

// w.a.p to print the duplicate element from the given array
// a=[10,20,30,20,30,40,50,60,10]
// 10,20,30

a=[10,20,30,20,30,40,50,60,10,10];
arr=[];
for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
      if(a[i]==a[j])
        {
            let found=false;
            for(let k=0;k<arr.length;k++)
            {
                if(arr[k]==a[i])
                {
                    found=true;
                    break;
                }
            }
            if(!found)
                arr.push(a[i]);
        } 
    }
}
console.log(arr.length==0?'no duplicate elements':arr);
