function solution(arr)
{
    var answer = [];
    let lastItem = ''
    arr.map((a, i) => {
        if (a === lastItem) {
            return
        } else {
            answer.push(a)
        }
        lastItem = a
    })
    
    return answer;
}