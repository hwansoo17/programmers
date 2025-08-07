function solution(spell, dic) {
    var answer = 2;
    dic.forEach((a, i) => {
        let spelling = a.split('')
        // console.log(spelling)
        let given = spell
        
        spelling.forEach((s, i) => {
            given = given.filter((b) => b !== s)
        })
        if (given.length === 0) {
                answer = 1
            }
        console.log(given)
    })
    
    return answer;
}