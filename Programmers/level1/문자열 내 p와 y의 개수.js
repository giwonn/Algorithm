// https://programmers.co.kr/learn/courses/30/lessons/12916
function solution(s){
    // reduce의 리턴은 개수가 같으면 0, 다르면 1
    // 0은 false, 1은 true 이므로 !를 붙여서 반대로 출력해주면 됨
    return ![...s.toLowerCase()].reduce((acc, cur) => {
        if (cur === 'p') return acc+1;
        if (cur === 'y') return acc-1;
        return acc;
    }, 0);   
}

// 모범 답안 1   
function solution(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

// 모범 답안 2
function solution(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}
