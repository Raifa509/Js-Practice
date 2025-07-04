// write a prgm to print pairs whose pair sum is 6

a=[2,3,4,5,1];
arr=[];
let target=6;
let left=0;
let isFound=false;
let right=a.length-1;
a.sort((n1,n2)=>n1-n2);
while(left<right)
{
    let sum=a[left]+a[right];
    if(sum==target)
    {
        arr.push([a[left],a[right]])
        isFound=true
        left++;
        right--;
    }
    else if(sum<target)
    {
        left++;
    }
    else{
        right--;
    }
}
console.log(!isFound?'not found':arr);
