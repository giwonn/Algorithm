// https://programmers.co.kr/learn/courses/30/lessons/67256
function solution(numbers, hand) {
    let answer = '';
    const left = [1, 4, 7];
    const right = [3, 6, 9];
    const center = [2, 5, 8, 0];
    let leftHand = [3, 0];
    let rightHand = [3, 2];

    numbers.map(num => {
        if (num === 1 || num === 4 || num === 7) {
            leftHand = [left.indexOf(num), 0];
            answer += "L";
        } else if (num === 3 || num === 6 || num === 9) { 
            rightHand = [right.indexOf(num), 2];
            answer += "R";
        } else {
            const centerNum = [center.indexOf(num), 1];
            if (distance_num(leftHand, centerNum) < distance_num(rightHand, centerNum)) {
                leftHand = centerNum;
                answer += "L";
            } else if (distance_num(leftHand, centerNum) > distance_num(rightHand, centerNum)) {
                rightHand = centerNum;
                answer += "R";
            } else {
                if (hand === 'left') {
                    leftHand = centerNum;
                    answer += "L";
                } else {
                    rightHand = centerNum;
                    answer += "R";
                }
            }
        }
    }); 

    return answer;
}

function distance_num(num1, num2) {
    return Math.abs(num1[0] - num2[0]) + Math.abs(num1[1] - num2[1])
}
