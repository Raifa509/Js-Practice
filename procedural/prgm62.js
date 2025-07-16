var car={
    name:'boleno',
    model:'hatch batch',
    manufacturer:'maruti',
    price:'10 lakhs'
}

// w.a.p to print the car name and manufacturer name

console.log(`Name of the car is ${car.name} and manufacturer name is ${car.manufacturer}`);
console.log('----------------');

// check 'model' key is present in object or not if present print the value

console.log('model' in car?`car model is ${car.model}`:`not present`)

console.log('----------------');
// add 'varient' key with value manual to the given object

car['Varient']=['manual']
console.log(car);

// add a new value 'automatic' to the varient key
car['Varient'].push('automatic')
console.log(car);

// add a new key as color with value 'red','blue', and 'yellow'
car['Color']=['red','blue','yellow']
console.log(car);
