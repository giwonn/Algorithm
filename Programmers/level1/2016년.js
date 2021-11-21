// https://programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
    let sum = -1;
    const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const weekDay = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    
    for (let i=0; i<a-1; i++) {
        sum += monthDay[i];
    }
    sum += b;
    
    return weekDay[sum % 7];
}
