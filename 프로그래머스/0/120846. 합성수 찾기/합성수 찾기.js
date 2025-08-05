function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        let 약수개수 = 0
        for (let a = 1; a <= i; a++) {
            if (i % a === 0) {
               약수개수 += 1
            }
        }
        if (약수개수 > 2) {
            answer += 1
        }
    }
    return answer;
}