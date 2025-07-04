// write a prgm to find the given number is prime or not

n = 0
if (n==1)
    console.log('neither prime nor not prime');
else {
    flag = 1
    if (n <= 0)
        flag = 0
    else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = 0
                break
            }
        }
    }
    console.log(flag == 1 ? 'prime' : 'not prime');
}
