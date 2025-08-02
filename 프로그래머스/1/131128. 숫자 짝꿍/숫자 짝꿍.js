function solution(X, Y) {
    let x = [...X]
    let y = [...Y]
    let answer = ''
    for (let i = 9; i >= 0; i--) {
        const xCount = x.filter((a) => a === i.toString()).length
        const yCount = y.filter((a) => a === i.toString()).length
       
        const minCount = Math.min(xCount, yCount)
        console.log(i, xCount, yCount, minCount)
        answer = answer + i.toString().repeat(minCount)
        
    }
    if (answer === '') {
        return '-1';
    }
    
    if (Number(answer) === 0) {
        return '0'
    }

    return answer;
}