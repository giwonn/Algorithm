// https://programmers.co.kr/learn/courses/30/lessons/86051?language=javascript
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc+cur);
}
