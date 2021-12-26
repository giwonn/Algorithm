var fs = require('fs');
var [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = 0;
answer = input.split(' ').sort((a, b) => a - b)
  .reduce((acc, cur, idx) => {
      answer += acc;
      return acc + Number(cur);
    }, 0) + answer;

console.log(answer);
