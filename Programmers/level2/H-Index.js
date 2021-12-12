// https://programmers.co.kr/learn/courses/30/lessons/42747
function solution(citations) {
    let i = 0;

    while (i+1 <= citations.sort((a,b) => b - a)[i]) i++;
    
    return i;
}
