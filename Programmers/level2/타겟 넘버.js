// https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
function solution(numbers, target) {
    let arr = [0];
    
    numbers.map((number) => {
        const imsi = [];
        arr.map((n) => {imsi.push(...[n+number, n-number])})
        arr = imsi;
    })
    return arr.filter((number) => number === target).length;
}
