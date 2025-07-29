function solution(video_len, pos, op_start, op_end, commands) {
    const getSec = (time) => {
        const [min, sec] = time.split(':')
        return Number(min) * 60 + Number(sec)
    }
    let currentPos = getSec(pos)
    const vidLen = getSec(video_len)
    const opStart = getSec(op_start)
    const opEnd = getSec(op_end)
    const skipOp = () => {
        if (currentPos >= opStart && currentPos <= opEnd) {
            currentPos = opEnd
        }
    }
    commands.map((c) => {
        skipOp()
        if (c === "next") {
            if (currentPos > vidLen - 10 ) {
                currentPos = vidLen
            } else {
                currentPos = currentPos + 10
            }
        }
        if (c === "prev") {
            if (currentPos < 10 ) {
                currentPos = 0
            } else {
                currentPos = currentPos - 10
            }
        }
        skipOp()     
    })
    
    const lastPosMin = parseInt(currentPos/60)
    const lastPosSec = currentPos%60
    const lastPosTime = `${lastPosMin.toString().padStart(2, 0)}:${lastPosSec.toString().padStart(2, 0)}`
    return lastPosTime;
}