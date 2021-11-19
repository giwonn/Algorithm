// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    // Number.toString(진수) : 해당숫자를 진수변환 후 문자열로 리턴해줌
    return [...n.toString(3)].reduce((acc, cur, i) => parseInt(acc) + cur * 3**i) * 1
}


// 모법 답안
const solution = (n) => {
    // 3진수 변환 -> 거꾸로 -> join으로 숫자로 함쳐줌 -> parseInt(수, 3)으로 3진수를 10진수로 변환
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
