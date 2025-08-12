function solution(arr) {
    let count0 = 0
    let count1 = 0  
    const getQuad = (array) => {
        const flatList = array.flat()
        const size = array.length
        if (flatList.filter((a) => a === 0).length === flatList.length) {
            count0 += 1
            return 0;
        }
        if (flatList.filter((a) => a === 1).length === flatList.length) {
            count1 += 1
            return 1;
        }
        let first = []
        const second = array.map((a, i) => {
            first.push(a.splice(0, a.length/2))
            return a
        })
        
        const third = first.splice(size/2)
        const fourth = second.splice(size/2)
        // console.log('결과','1:', first,'2:', second,'3:', third,'4:', fourth)
        getQuad(first)
        getQuad(second)
        getQuad(third)
        getQuad(fourth)
    }
    getQuad(arr)
    console.log(count0, count1)
    var answer = [count0, count1];
    return answer;
}