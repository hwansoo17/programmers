function solution(friends, gifts) {
    let table = {}
    let presentScore = {}
    let nextMonth = {}
    
    const getCombinations = (arr, num) => {
        const results = []
        if (num === 1) return arr.map((a) => [a])
        arr.map((a,i) => {
            const rest = arr.slice(i + 1);
            const restComb = getCombinations(rest, num - 1)
            const comb = restComb.map((c) => [a, ...c])

            results.push(...comb)
        })
        
        return results
    }
    const combinations = getCombinations(friends, 2)
    
    const makeCombine = friends.map((name) => {
        
    })
    const makeTable = friends.map((name,i) => {
        let d = {}
        const c = friends.map((f, i) => {
            d[f] = 0
        })
        table[name] = d
        presentScore[name] = 0
        nextMonth[name] = 0
    })
    const fillTable = gifts.map((gift, i) => {
        const [giver, taker] = gift.split(" ")
        table[giver][taker] = table[giver][taker] + 1
        presentScore[giver] = presentScore[giver] + 1
        presentScore[taker] = presentScore[taker] - 1
    })
    
    
    
    const getNextMonth = combinations.map((c) => {
        const [a, b] = c
        if (table[a][b] > table[b][a]) {
            nextMonth[a] = nextMonth[a] + 1
        }
        if (table[a][b] < table[b][a]) {
            nextMonth[b] = nextMonth[b] + 1
        }
        if (table[a][b] === table[b][a]) {
            if (presentScore[a] > presentScore[b]) {
                nextMonth[a] = nextMonth[a] + 1
            }
            if (presentScore[a] < presentScore[b]) {
                nextMonth[b] = nextMonth[b] + 1
            }
            if (presentScore[a] === presentScore[b]) {
                return;
            }
        }
    })
    const count = friends.map((a) => {
        return nextMonth[a]
    })
    const maxValue = Math.max(...count)
    return maxValue;
}