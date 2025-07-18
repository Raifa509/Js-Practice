// 1
// 1 2 
// 1 2 3
// 1 2 3 4

for (row = 1; row <= 4; row++) {
    let str = ""
    count = 0
    for (col = 1; col <= row; col++) {
        count++
        str += count + " "
    }
    console.log(str);

}
console.log('------------------');

// 1
// 2 2 
// 3 3 3
// 4 4 4 4

count = 1
for (row = 1; row <= 4; row++) {

    let str = ""
    for (col = 1; col <= row; col++) {

        str += count + " "

    }
    count++
    console.log(str);

}
console.log('------------------');
// or

for(row=1;row<=4;row++)
{
    str=""
    for(col=1;col<=row;col++)
    {
        str+=row+" "
    }
    console.log(str);

}

console.log('------------------');
// * * * *
// * * *
// * *
// *

for (row = 4; row >= 1; row--) {
    let str = ""
    for (col = 1; col <= row; col++) {
        str += "* "
    }
    console.log(str);

}

console.log('------------------');