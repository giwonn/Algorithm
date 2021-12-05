function solution(record) {
    const id_nickname = {};
    
    record.forEach((log) => {
        const [behavier, userid, nickname] = log.split(' ');
        if (['Change', 'Enter'].includes(behavier)) id_nickname[userid] = nickname;
    })
    
    return record
        .filter((log) => log.split(' ')[0] !== 'Change')
        .map((log) => {
            const [behavier, userid, nickname] = log.split(' ');
            if (behavier === 'Enter') return `${id_nickname[userid]}님이 들어왔습니다.`;
            if (behavier === 'Leave') return `${id_nickname[userid]}님이 나갔습니다.`;
        });
}
