// https://programmers.co.kr/learn/courses/30/lessons/42888
function solution(record) {
    // {유저아이디: 닉네임, ...} 형식으로 저장함
    const id_nickname = {};
    record.forEach((log) => {
        // 행동, 유저아이디, 닉네임
        const [behavier, userid, nickname] = log.split(' ');
        if (['Change', 'Enter'].includes(behavier)) {
            id_nickname[userid] = nickname;
        }
    })
    
    return record
        .filter((log) => log.split(' ')[0] !== 'Change')    // filter로 change는 제외
        .map((log) => {                                     // map으로 새로운 배열 리턴
        const [behavier, userid, nickname] = log.split(' ');
        if (behavier === 'Enter') {
            return `${id_nickname[userid]}님이 들어왔습니다.`;
        }
        if (behavier === 'Leave') {
            return `${id_nickname[userid]}님이 나갔습니다.`;
        }
    })
}
