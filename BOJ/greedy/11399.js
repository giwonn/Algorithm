var fs = require('fs');
var [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let res = 0;
let answer = input
  .split(' ')
  .sort((a, b) => a - b)
  .reduce((acc, cur, idx) => {
    res += acc;
    return acc + Number(cur);
  }, 0);

answer += res;

console.log(answer);
