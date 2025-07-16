//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name

products.forEach((item)=>console.log(item[1]));

console.log('----------------------');

//2. display product name whose price < Rs.50

products.filter((item)=>item[2]<50).forEach((item)=>console.log(item[1]));
console.log('----------------------');

//3. print price of oreo

oreoPrice=products.find((item)=>item[1]=='oreo')
console.log(oreoPrice[2]);

console.log('----------------------');

//4. print costly product name

costly=products.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
console.log(costly[1]);
console.log('----------------------');

//5. display out of stock product name

products.filter((item)=>item[3]==0).forEach((item)=>console.log(item[1]));
console.log('----------------------');

//6. sort products based on stock in descending order

des=products.sort((a,b)=>b[3]-a[3]).forEach((item)=>console.log(item));
console.log('----------------------');

//7. print product name having maximum available stock
maxAva=products.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)
console.log(maxAva[1]);
console.log('----------------------');

//8. is there any product that can be purchased by Rs. 10

prdt=products.some((n1)=>n1[2]<=10);
console.log(prdt?`Yes ,you can`:`Sorry,you can't`);
console.log('----------------------');

//9. Is there any product in the range of 10 to 30 rs

prdt=products.some((n1)=>n1[2]>=10 && n1[2]<=30);
console.log(prdt?`Yes ,there is product`:`Sorry,No`);
console.log('----------------------');

//10. print all products in the range of 10 to 30 rs

prdtrange=products.filter((item)=>item[2]>=10 && item[2]<=30).forEach((item)=>console.log(item));
