// https://programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant,completion) {
    completion.forEach(name => completion[name] = (completion[name]|0)+1);
    return participant.find((name) => !completion[name]--); 
}