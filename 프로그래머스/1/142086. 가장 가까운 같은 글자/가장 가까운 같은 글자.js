function solution(s) {
    var answer = [];
    const hash = {}
    const a = s.split('')
    a.forEach((alphabet, i) => {
        if (hash[alphabet] !== undefined) {
            answer.push(i - hash[alphabet])
        } else {
            answer.push(-1)
        }
        hash[alphabet] = i
   
    })
    return answer;
}