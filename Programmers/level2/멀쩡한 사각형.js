// https://programmers.co.kr/learn/courses/30/lessons/62048
// 대각선이 지나가는 사각형의 넓이 = 가로 + 세로 - (최대공약수)
// 답 = 전체사각형 넓이 - 대각선지나는넓이
// 최대공약수 : 유클리드 호제법을 사용하자..
function solution(w, h) {
    return w * h - (w + h - gcd(w, h));
}

function gcd(w, h) {
    return w % h === 0 ? h : gcd(h, w % h);
}
