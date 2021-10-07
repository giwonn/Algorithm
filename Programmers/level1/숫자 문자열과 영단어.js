// https://programmers.co.kr/learn/courses/30/lessons/81301?language=javascript
function solution(s) {
    var answer = s;
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }
    
    return Number(answer);
}