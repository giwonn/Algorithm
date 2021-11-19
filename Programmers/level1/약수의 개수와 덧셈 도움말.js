// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    let answer = 0;
    
    for (let num=left; num<=right; num++) {
        // 제곱근이 정수면 약수에 포함되므로 홀수가 됨
        if (Math.sqrt(num) % 1 === 0) {
            answer -= num;
        } else {
            answer += num;
        }
    }
    
    return answer;
}
