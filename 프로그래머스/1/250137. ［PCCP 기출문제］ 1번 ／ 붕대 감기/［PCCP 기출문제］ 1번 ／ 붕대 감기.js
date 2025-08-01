function solution(bandage, health, attacks) {
    const [castingTime, healingAmountPerSec, additionalHealingAmount] = bandage
    let hp = health;
    let c = [];
    const fightTime = attacks[attacks.length - 1][0]
    const timeList = [...Array(fightTime)];
    let successNum = 0
    let cancel = false
    timeList.map((_, i) => {
        const currentTime = i + 1;
        attacks.map((attack, attacks) => {
            const [t, d] = attack
            if (t === currentTime) {
                hp = hp - d
                cancel = true
                successNum = 0
            }
        })
        if (cancel) {
            cancel = false
            return;
        }
        
        if (hp < 1) return;
        
    
        if (hp + healingAmountPerSec > health) {
            hp = health
            successNum = successNum + 1
        } else {
            hp = hp + healingAmountPerSec
            successNum = successNum + 1
        }
       
    
        if ( successNum === castingTime) {
            if (hp + healingAmountPerSec > health) {
                hp = health
            } else {
                hp = hp + additionalHealingAmount
            }
            successNum = 0
        }
    })
    if (hp < 1) {
        hp = -1
    }
    return hp;
}