// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
function solution(board, moves) {
    const arr = [];
    const n = board.length;
    let cnt = 0;
    
    moves.map((col) => {
        for (let row = 0; row < n; row++) {
            if (board[row][col-1] !== 0) {
                if (arr[arr.length-1] === board[row][col-1]) {
                    arr.pop();
                    cnt += 2;
                } else {
                    arr.push(board[row][col-1]);
                }
                
                board[row][col-1] = 0;
                break;
            }
        } 
    });
    
    return cnt;
}
