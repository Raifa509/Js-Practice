//write a prgm to display all numbers whose exponential is in the range of 8 to 36
//user can input the power value
num=1
powerValue=3
while(num**powerValue<=36)
{
    if(num**powerValue>=8)
    {
        console.log(num);
    }
    num++
}
