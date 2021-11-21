// https://programmers.co.kr/learn/courses/30/lessons/87389
function solution(n) {
    let x = 2;
    
    while(n % x !== 1) {
        x++;
    }
    
    return x;
}
