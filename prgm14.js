// write a prgm to find the reverse of a given number

num=452
rev=0
rem=0
while(num>0)
{
    rem=num%10
    rev=rev*10+rem
    num=Math.floor(num/10)
    
}
console.log(`reverse of the number:${rev}`);

