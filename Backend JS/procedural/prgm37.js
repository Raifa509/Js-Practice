// write a prgm to display a given number is positive or negative using function

function posNeg(num)
{
    console.log(num>0?`positive`:num==0?`Neither positive nor negative`:`negative`);
    
        
}

posNeg(5)

// write a prgm to display a given number is odd or even

function oddEven(num)
{
    console.log(num%2==0?`Even`:`odd`);
    
}
oddEven(5)

// write a prgm to display the greatest number among two given numbers using function

function largest(num1,num2)
{
   console.log(num1>num2?`${num1} is largest`:num2>num1?`${num2} is largest`:`equal`);
   
}
largest(3,3);

// write a prgm to display cube of a given number using function

function cube(num)
{
    console.log(`Cube of ${num} =`,num**3);
    
}
cube(3)
