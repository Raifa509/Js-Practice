// Binary Search

let a = [10, 11, 12, 3, 4,2];
let key = 8;
let low = 0;
let high = a.length - 1;
let isFound=false;

a.sort((n1, n2) => n1 - n2);

while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (a[mid] == key) {
        isFound=true;
        break;
    } else if (a[mid] < key) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}
// !isFound && console.log('not present');
console.log(!isFound?'not present':'Present');

