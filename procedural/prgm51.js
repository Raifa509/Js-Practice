a=[10,11,12,13,14,15]

high=a.reduce((n1,n2)=>n1>n2?n1:n2);
console.log(high);

expense = [15000, 25000, 50000, 30000, 65000]


lowest=expense.reduce((n1,n2)=>n1<n2?n1:n2);
console.log(`lowest expense = ${lowest}`);


highest=expense.reduce((n1,n2)=>n1>n2?n1:n2);
console.log(`Highest expense = ${highest}`);

total=expense.reduce((n1,n2)=>n1+n2);
console.log(`Total expense = ${total}`);

console.log('----------------');

