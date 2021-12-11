// https://programmers.co.kr/learn/courses/30/lessons/77485
function solution(rows, columns, queries) {
    // 행렬 만드는 로직
    const array = [];
    let cnt = 1;
    
    for (let x=0; x<rows; x++) {
        const row = [];
        for (let y=0; y<columns; y++) {
            row.push(cnt++);
        }
        array.push(row);
    }
    
    return queries.map(query => rotation(array, query));
}

const min = (a, b) => a > b ? b : a; // 어떤 수가 작은지 비교함

// 로테이션 함수는 회전 후 가장 작은 수를 리턴해줌
const rotation = (array, [x1, y1, x2, y2]) => {  
    x1--; y1--; x2--; y2--; // 인덱스에 맞게 -1씩 해줌
    const temp = array[x1][y1];  // 좌측 상단의 수를 저장해놓자.
    let minNum = temp;           // 가장 작은 수는 일단 좌측상단으로 초기화

    for (let i=x1; i<x2; i++) {  // 좌측 (아랫쪽의 숫자를 위로 땡김)
        array[i][y1] = array[i+1][y1];
        minNum = min(array[i+1][y1], minNum);
    }

    for (let i=y1; i<y2; i++) {  // 하단 (오른쪽의 숫자를 왼쪽으로 땡김)
        array[x2][i] = array[x2][i+1];
        minNum = min(array[x2][i+1], minNum)
    }

    for (let i=x2; i>x1; i--) {  // 우측 (윗쪽의 숫자를 아래로 땡김)
        array[i][y2] = array[i-1][y2];
        minNum = min(array[i-1][y2], minNum);
    }

    for (let i=y2; i>y1; i--) {  // 상단 (왼쪽의 숫자를 오른쪽으로 땡김)
        array[x1][i] = array[x1][i-1];
        minNum = min(array[x1][i-1], minNum);
    }

    array[x1][y1+1] = temp;  // (x1, y1+1) 좌표에 temp(x1, y1)을 넣어줌으로써 마무리

    return minNum;  // 가장 작은 수를 push!
}
