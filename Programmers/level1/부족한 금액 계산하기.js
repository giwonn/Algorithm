function solution(price, money, count) {
    var answer = [];
    
    for (let i=1; i<=count; i++) {
        answer.push(price * i);
    }
    
    const ans = answer.reduce((acc, cur) => acc+cur) - money;
    
    return ans > 0 ? ans : 0;
}
