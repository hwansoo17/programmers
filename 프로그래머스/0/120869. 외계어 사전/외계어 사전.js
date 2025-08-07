function solution(spell, dic) {
    var answer = 2;
    for (let i = 0; i < dic.length; i++) {
        let dicSpell = dic[i].split('')
        let alphabet = spell
        for (let a = 0; a < dicSpell.length; a++) {
            alphabet = alphabet.filter((b) => b !== dicSpell[a])
            if (alphabet.length === 0) {
                answer = 1
                break;
            }
        }
        if (alphabet.length === 0) {
            break;
        }    
    }
    
    return answer;
}