function solution(k, score) {
    // 매일 1명 문자 투표수 -> 점수
    // 기존 출연 가수들의 점수중 상위 k번째 이내 -> 명전
    // k일까지는 모든 가수 명전
    // 명전 최하위 점수 발표

    // score에서 매일 하나씩 참여자 리스트에 추가 후 내림차순으로 k만큼 뽑은뒤 그중 가장 작은 수 추가
    var answer = [];
    let 참여자리스트 = []
    score.map((s) => {
        참여자리스트.push(s)
        참여자리스트.sort((a,b) => b-a)
        if (참여자리스트.length < k) {
            answer.push(참여자리스트[참여자리스트.length - 1])
        } else {
            answer.push(참여자리스트[k - 1])
        }
        // console.log(참여자리스트, answer)
    })
    return answer;
}