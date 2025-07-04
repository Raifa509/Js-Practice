// write a prgm to print a given number is palindrome or not

num = 121
n=num
rev = 0
rem = 0
while (n > 0) {
    rem = n % 10
    rev = rev * 10 + rem
    n = Math.floor(n / 10)

}
console.log(num==rev ? 'palindrome' :'not palindrome');
