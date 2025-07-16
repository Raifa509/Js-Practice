// write a prgm to find hcf of two given numbers

num1=12
num2=28
hcf=0
minimum=Math.min(num1,num2)
for(let i=1;i<=minimum;i++)
{
    if(num1%i==0 && num2%i==0)
        hcf=i  
    
}
 console.log(hcf);


