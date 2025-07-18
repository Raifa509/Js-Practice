// write a prgm to print all amstrong numbers btw 8 to 500
for(let num=8;num<=500;num++)
{
    n=num
    rem=0
    result=0
    digitCount=num.toString().length
    while(n>0)
    {
        rem=n%10
        result+=rem**digitCount
        n=Math.floor(n/10)
    }
    num==result && console.log(num); 
}