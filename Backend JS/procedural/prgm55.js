//[ no, district, +ve cases, death rate, curred rate, 1st dose vaccine, 2nd dose vaccine]
covid_data = [
    [1, 'Ernakulam', 34000, 2000, 23000, 20000, 2000],
    [2, 'Idukki', 14000, 3000, 25000, 30000, 1000],
    [3, 'Thrissur', 24000, 4000, 33000, 24000, 2500],
    [4,'Pathanamthitta',20000, 2000, 45000, 22000, 1500],
    [5, 'Kozhikode', 44000, 5000, 12000, 21000, 500],
    [6, 'Palakkad', 12000, 1000, 20000, 23000, 3400],
    [7, 'Kottayam', 27000, 1500, 27000, 14000, 1000],
    [8, 'Kollam', 14000, 2500, 25000, 18000, 2700]

]
//1. district having Highest +ve case 

console.log('District having Highest +ve case ');
high=covid_data.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
console.log(high[1]);
console.log('----------------------');

//2. district having Highest 1st dose vaccine

console.log('district having Highest 1st dose vaccine');
high_dose=covid_data.reduce((n1,n2)=>n1[5]>n2[5]?n1:n2)
console.log(high_dose[1]);
console.log('----------------------');

//3. district having lowest death rate

console.log('district having lowest death rate');
low=covid_data.reduce((n1,n2)=>n1[2]<n2[2]?n1:n2)
console.log(low[1]);
console.log('----------------------');

//4. sort data with +ve case in descending order

console.log('sort data with +ve case in descending order');
covid_data.sort((a,b)=>b[2]-a[2]).forEach((item)=>console.log(item[1]));
console.log('----------------------');

//5. is district with +ve cases > 15000

console.log('is district with +ve cases > 15000');
posCase=covid_data.some((item)=>item[2]>15000?`Yes`:`No`)
console.log(posCase);
console.log('----------------------');

//6. sort data with 1st dose vaccine ascending order

console.log('sort data with 1st dose vaccine ascending order');
covid_data.sort((a,b)=>a[5]-b[5]).forEach((item)=>console.log(item[1]));
console.log('----------------------');

//7. Print Thrissur details

console.log('Print Thrissur details');
thr=covid_data.find((item)=>item[1]=='Thrissur')
console.log(thr);
console.log('----------------------');

//8. Print total number of positive cases

console.log('Total number of positive cases');
totalPosCase=covid_data.map((item)=>item[2]).reduce((s1,s2)=>s1+s2)
console.log(totalPosCase);
console.log('----------------------');

//9. Print total number of curred cases

console.log('total number of curred cases');
totalCuredCase=covid_data.map((item)=>item[4]).reduce((s1,s2)=>s1+s2)
console.log(totalCuredCase);
console.log('----------------------');

//10. Print curred cases in Idukki

console.log('curred cases in Idukki');
idukki=covid_data.find((item)=>item[1]=='Idukki')
console.log(idukki[4]);
console.log('----------------------');
