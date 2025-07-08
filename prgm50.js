a=[10,11,12,13,14,15];

a.forEach((item)=>console.log(item));

x=a.map((item)=>item)
console.log(x);


even=a.filter((i)=>i%2==0)
console.log(even);

findEven=a.find((i)=>i%2==0)
console.log(findEven);