//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
for(let item of employee)
{
   console.log(item[1]);
   
}
console.log('----------------');

//print total numbers of employee
let count=0;
for(let item of employee)
{
    count++
}
console.log(`No of employees= ${count}`);

console.log('----------------');

//print developer employee details

for(let item of employee)
{
    if(item[2]=='developer')
    {
        console.log(item);
    }
}

console.log('----------------');
//print employee whose salary > 30000
console.log("employee whose salary > 30000");
for(let item of employee)
{
   
    if(item[4]>30000)
    {
        console.log(item[1]);
    }
}

console.log('----------------');

// print details of employee Laisha

console.log("details of employee Laisha");
for(let item of employee)
{
   
    if(item[1]=='Laisha')
    {
        console.log(item);
    }
}

console.log('----------------');

//sort employee based on their salary in descending orde

console.log("Employees sorted by salary in descending order");
employee.sort((a,b)=>b[4]-a[4]);

for(let item of employee)
{
    console.log(item);
    
}

console.log('----------------');

//sort employee based on their experience in ascending order
console.log("Employees sorted by salary in ascending order");
employee.sort((a,b)=>a[4]-b[4]);

for(let item of employee)
{
    console.log(item);
    
}
console.log('----------------');

// print the employ name whose have the higest salary
console.log("employee whose have highest salary");
let max=employee[0];
for(let item of employee)
{
   if(item[4]>max[4])
   {
        max=item;
   } 
}
for(let item of employee)
{
    if(item[4]==max[4])
    {
        console.log(item);
        
    }
}
console.log('----------------');