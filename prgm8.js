// write a prgm to check the largest among 2 given numbers

a=100
b=100
if(a>b)
    console.log(`the largest numbers is ${a}`);
else if(b>a)
    console.log(`the largest numbers is ${b}`);
else
    console.log(`both are equal`);

console.log('---------------');

// write a prgm to check the second largest number from the given 3 different number and arrange them in descending order
n1 = 50
n2 = 10
n3 = 15
let largest, secondLargest, smallest
if (n1 > n2 && n1 > n3) {
    largest = n1
    if (n2 > n3) {
        secondLargest = n2
        smallest = n3
    }
    else {
        secondLargest = n3
        smallest = n2
    }
}
else if (n2 > n1 && n2 > n3) {
    largest = n2
    if (n1 > n3) {
        secondLargest = n1
        smallest = n3
    }
    else {
        secondLargest = n3
        smallest = n1
    }
}
else {
    largest = n3
    if (n1 > n2) {
        secondLargest = n1
        smallest = n2
    }
    else {
        secondLargest = n2
        smallest = n1
    }
}
console.log(`second Largest : ${secondLargest}`);
console.log(`Descending order : ${largest},${secondLargest},${smallest}`);

