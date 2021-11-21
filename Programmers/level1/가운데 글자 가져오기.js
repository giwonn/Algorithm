// https://programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {
    const mid = s.length % 2 === 0 ? (s.length/2) - 1 : (s.length-1) / 2;
    return s.length % 2 === 0 ? s[mid]+s[mid+1] : s[mid];
}
