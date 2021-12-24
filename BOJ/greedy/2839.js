var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim();
let n = Number(input);
let res = -1;

let five = Math.floor(n / 5);
while (five >= 0) {
    const remain = input - five * 5; // 일단 남은 킬로그램부터 구해봐야함
    if (remain % 3 === 0) {
        res = remain / 3 + five;
        break;
    } else {
        five--;
    }
}

console.log(res);
