function solution(s) {
    var answer = [];
    const a = s.split('')
    console.log(a)
    a.forEach((b, i) => {
        const before = a.slice(0,i).reverse()
        const position = before.findIndex((c) => c === b)
        answer.push(position === -1 ? -1 : position + 1)
    })
    return answer;
}