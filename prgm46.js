let p = [10, 11, 12, 20, 30];
let q = [11, 20, 25, 30, 33];

p.sort((a, b) => a - b);
q.sort((a, b) => a - b);

let arr = [];

let left = 0;
let right = 0;

while (left < p.length && right < q.length) {
    if (p[left] == q[right]) {
        arr.push(p[left])
        left++;
        right++;
    }
    else if (p[left] < q[right]) {
        left++;
    }
    else {
        right++;
    }
}
console.log(arr.length==0?`no duplicate`:arr);
