// https://programmers.co.kr/learn/courses/30/lessons/86491
function solution(sizes) {
    // [큰값, 작은값] 으로 정렬해줌
    sizes.forEach(arr => {
        if (arr[0] < arr[1]) {
            const temp = [...arr][0];
            arr[0] = arr[1];
            arr[1] = temp;
        }
        
        return arr;
    });
    
    const w = Math.max(...sizes.map(arr => arr[0]));
    const h = Math.max(...sizes.map(arr => arr[1]));
    
    return w * h;
}


// 모법 답안
function solution(sizes) {
  // h, v : 비교해가면서 가장 큰 값이 여기에 저장됨
  // a, b : [큰값, 작은값]으로 바꾸면서 h, v와 비교함
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}
