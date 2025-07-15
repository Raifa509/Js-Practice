products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only

products.forEach((item)=>console.log(item.pName));
console.log('----------------');

//2. print all mobile details whose display is lcd

products.filter((item)=>item.display=='lcd').forEach((item)=>console.log(item));
console.log('----------------');

//3. print 5g mobile phone name

products.filter((item)=>item.band=='5g').forEach((item)=>console.log(item.pName));
console.log('----------------');

//4. sort mobile based on price

products.sort((a,b)=>a.price - b.price).forEach((item)=>console.log(item.pName));
console.log('----------------');
//5. print costly mobile

high=products.reduce((c1,c2)=>c1.price>c2.price?c1:c2)
console.log(high.pName);
console.log('----------------');
//6. print low cost mobile
low=products.reduce((c1,c2)=>c1.price<c2.price?c1:c2)
console.log(low.pName);