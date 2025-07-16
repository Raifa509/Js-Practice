// write a prgm to display a given number is positive or negative using arrowfunction

const posNeg=(num)=>console.log(num>0?`positive`:num==0?`Neither positive nor negative`:`negative`);

posNeg(5)

// write a prgm to display a given number is odd or even using arrow function

const oddEven=(num)=>console.log(num%2==0?`Even`:`odd`);
    
oddEven(5)

// write a prgm to display the greatest number among two given numbers using arrow function

const largest=(num1,num2)=>console.log(num1>num2?`${num1} is largest`:num2>num1?`${num2} is largest`:`equal`);
   

largest(5,3);

// write a prgm to display cube of a given number using arrow function

const cube=(num)=>console.log(`Cube of ${num} =`,num**3);
cube(3)