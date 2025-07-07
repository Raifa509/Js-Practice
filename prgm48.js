// Nested Array
a=[[5,6],[11,9],[3,10]];

// wrp to  print all numbers from the given array
for(let item of a)
{
    for(let num of item)
    {
        console.log(num);
        
    }
    
}
console.log('--------------');
// print sum of all numbers from the given array

let sum=0;
a=[[5,6],[11,9],[3,10]];
for(let item of a){
    for(let num of item)
    {
        sum+=num;
    }
}
console.log(sum);

console.log('--------------');

b=[[[5,6],[1,0]],[[11,9],[55,60]],[[3,10],[5,0]]];
d=b.flat(Infinity);
console.log(d);

for(let item of d){
    console.log(item);
    
}

