// https://programmers.co.kr/learn/courses/30/lessons/12982
function solution(d, budget) {
    let answer = 0;
    
    d.sort((a, b) => a - b)
     .map((req) => {
        budget -= req;
        if (budget < 0) return answer;
        answer++;
    });
    
    return answer;
}
