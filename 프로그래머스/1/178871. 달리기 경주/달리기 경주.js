function solution(players, callings) {
    let answer = []
    let rank = 0
    let playersRank = {}
    let rankPlayers = {}
    players.map((a, i) => {
        playersRank[a] = i
        rankPlayers[i] = a
    })
    const a = callings.map((c) => {
        rank = playersRank[c]
        const frontMan = rankPlayers[rank - 1]
        rankPlayers[rank] = rankPlayers[rank - 1]
        rankPlayers[rank - 1] = c
        playersRank[c] = playersRank[c] - 1
        playersRank[frontMan] = playersRank[frontMan] + 1
    })
    const arr = Object.keys(rankPlayers)
    arr.map((a) => {
        answer.push(rankPlayers[a])
    })
    return answer;
}