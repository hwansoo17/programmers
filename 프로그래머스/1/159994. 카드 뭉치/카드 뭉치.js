function solution(cards1, cards2, goal) {
    // goal 반복
    // cards1 이나 cards2의 [0] 에 있는지 검사
    // 있으면 splice로 제거
    let q1 = cards1
    let q2 = cards2 
    var answer = 'Yes';
    goal.map((word) => {
        if (q1[0] === word) {
            q1.splice(0, 1)
        } else if (q2[0] === word) {
            q2.splice(0, 1)
        } else {
            answer = 'No'
        }
        
        
    })

    return answer;
}