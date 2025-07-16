// write a prgm to print all prime numbers between 2-50

for (let num = 2; num <= 50; num++) {
    flag = 1
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = 0
            break
        }
    }
    flag && console.log(num);
}