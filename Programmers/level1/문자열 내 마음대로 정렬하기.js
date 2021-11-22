// https://programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
    var answer = [];
    
    return strings.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
        if (a[n] === b[n]) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        }
    });

}


// 다른 사람의 풀이
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    // localeCompare() : 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
