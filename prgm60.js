employees={
    empId:1000,
    empName:'Neel',
    empDesg:'developer'
}
console.log(employees['empName']);
console.log('----------------');

for(let key in employees)
{
    console.log(key);
    
}
console.log('----------------');


for(let key in employees)
{
    console.log(employees[key]);
    
}

console.log('----------------');

// adding

employees['empLoc']='Kochi'
console.log(employees);

console.log('----------------');

employees['empSal']=30000
console.log(employees);

console.log('----------------');

Object.assign(employees,{empExp:3,empVacc:'Yes'});
console.log(employees);

console.log('----------------');

// updating

employees['empExp']=5
console.log(employees);
console.log('----------------');

employees['empName']='Neel P'
console.log(employees);


console.log('----------------');

// delete

delete employees.empVacc
console.log(employees);

console.log('----------------');


// w.a.p to check 'empLoc' key is present in the given object,if yes print the value  else print not present

isEmpLoc=false
for(let key in employees)
{
    if(key=='empLoc')
    {
       isEmpLoc=true
       break;
    }
}
console.log(isEmpLoc?employees['empLoc']:'Not present');
console.log('----------------');

'empLoc' in employees?console.log(employees['empLoc']):console.log('not present');

// w.a.p to check 'empGender' key is present in the given object,if yes print the value else add a new Value
console.log('----------------');
empGend=false
for(let key in employees)
{
    if(key=='empgend')
    {
       console.log(employees['empgend']);
       empGend=true
       break;
       
    }
}

if(!empGend)
{
    employees['empGen']='Male'
}
console.log(employees);

console.log('----------------');

'empGend' in employees?employees['empGend']:(employees['empGend']='Male',console.log(employees))



