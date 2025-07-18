
// Arrays

weekday=['mon','tue','wed','thu']
console.log(weekday);
console.log(typeof(weekday));
console.log(weekday[0]);
console.log('----------------');
for(let i=0;i<weekday.length;i++)
{
    console.log(weekday[i]);
    
}
console.log('----------------');
for(let i in weekday)
    console.log(weekday[i]);

console.log('----------------');

for(let i of weekday)
    console.log(i);


console.log('----------------');
weekday.push('fri')
console.log(weekday);

weekday.push(3)
console.log(weekday);

weekday.unshift('sun')
console.log(weekday);

weekday.unshift('7')
console.log(weekday);


console.log('----------------');
weekday.pop()
console.log(weekday);

weekday.shift()
console.log(weekday);
