// write a prgm to find a given number is armstrong or not
// 153=1**3 + 5**3 + 3**3
// 1+125+27 =153 

num=135
n=num
rem=0
result=0
while(n>0)
{
    rem=n%10
    result+=rem**3
    n=Math.floor(n/10)
}
console.log(num==result?'number is armstrong':'not armstrong');

