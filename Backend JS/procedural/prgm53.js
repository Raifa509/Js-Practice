a=[10,11,12,13,14,15]
// wap to print all even numbers from the given array
even=a.filter((item)=>item%2==0);
console.log(even);

// wap tp print the first even number from the given array
even1=a.find((item)=>item%2==0);
console.log(even1);
// wap to check whether there is even number in the given array

even2=a.some((item)=>item%2==0);
console.log(even2?`present`:`not present`);

// wap to check whether the even number 12 is present or not
even3=a.includes(12);
console.log(even2?`present`:`not present`);
