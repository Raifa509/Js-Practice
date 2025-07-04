// write a prgm to print pairs whose pair sum is 6
// a=[2,3,4,5]

a=[2,3,4,5,5];
arr=[];
let target=7;
for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        if(a[i]+a[j]==target)
        {
            let duplicate=false;
            for(let k=0;k<arr.length;k++)
            {
                let [x,y]=arr[k];
                if((a[i]==x && a[j]==y) || (a[i]==y && a[j]==x))
                {
                    duplicate=true;
                    break;
                }
            }
            if(!duplicate)
                arr.push([a[i],a[j]]);
        }
    }
}
console.log(arr.length==0?'no pairs':arr);

console.log('----------------');



// a=[2,3,4,5,5];
// pairsum=7
// isPresent=false
// for(let i=0;i<a.length;i++)
// {
//     for(let j=i+1;j<a.length;j++)
//     {
//         if(a[i]+a[j]==pairsum)
//         {
//             isPresent=true;
//             console.log(`(${a[i]},${a[j]})`); 
//         }
//     }
// }
// !isPresent && console.log('no pair sum');
