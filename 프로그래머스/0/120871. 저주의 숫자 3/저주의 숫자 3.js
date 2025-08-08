function solution(n) {
    let answer = 0;
    const getNextNum = (num) => {
        if (num % 3 === 0 || num.toString().split('').find((a) => a === '3')) {
            return getNextNum(num + 1)
        } else {
            return num;
        }
    }
    
    for (let i = 0; i < n; i++) {
        answer += 1
        answer = getNextNum(answer)
    }
    
    return answer;
}