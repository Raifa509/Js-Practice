expense = [15000, 25000, 50000, 30000, 65000]


// write A PRGM TO find the lowest expense 

let lowest = expense[0];
for (let i = 0; i < expense.length; i++) {
    if (expense[i] < lowest) {
        lowest = expense[i];
    }
}
console.log(`lowest expense = ${lowest}`);


// w.a.p to find highest expense

let highest = expense[0];
for (let i = 0; i < expense.length; i++) {
    if (expense[i] > highest) {
        highest = expense[i];
    }
}
console.log(`Highest expense = ${highest}`);


// w.a.p to find the total expense

let total = 0;
for (let i = 0; i < expense.length; i++) {
    total += expense[i]
}
console.log(`Total expense = ${total}`);

console.log('----------------');

// write a prgm to print whether 2 is present or not in a=[10,11,12,2,3,4]

let a=[10,11,12,2,3,4];
let flag=0;
for(let item of a ){
    if(item==2)
    {
          flag=1;   
          break;
    }
         
}
console.log(flag==1?`Present`:`not present`);

