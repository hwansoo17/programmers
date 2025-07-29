function solution(park, routes) {
    let Y = 0;
    let X = 0;
    const getStartPoint = park.map((a,i) => {
        if (a.includes("S")) {
            Y = i
            X = a.indexOf("S")
        } else {
            return
        }
    })
    const parkSize = {height:park.length, width: park[0].length}
    
    const move = routes.map((route, i) => {
        const [a, b] = route.split(" ")
        if (a === "E") {
            const currentRow = park[Y]
            const nextStep = currentRow.slice(X+1,X+1+ Number(b))
            if (nextStep.includes("X") || Number(X) + Number(b) > parkSize.width -1 ) {
                return `X:${X} Y:${Y} dir:${a} how:${b} notMove`
            } else {
                X = Number(X) + Number(b)
            }
        }
        if (a === "W" ) {
            const currentRow = park[Y]
            const nextStep = currentRow.slice(X- Number(b), X)
           
            if (nextStep.includes("X") || Number(X) - Number(b) < 0) {
                return `X:${X} Y:${Y} dir:${a} how:${b} notMove`
            } else {
                X = Number(X) - Number(b)
            }
            return nextStep
        }
        if (a === "S") {
            let col = ""
            const currentCol = park.map((a, i) => {
                col = col + a[X]
            })
            const nextStep = col.slice(Y+1,Y+1+ Number(b))
            if (nextStep.includes("X") || Number(Y) + Number(b) > parkSize.height -1) {
                return `X:${X} Y:${Y} dir:${a} how:${b} notMove`
            } else {
                Y = Number(Y) + Number(b)
            }
            return nextStep
        }
        if (a === "N") {
            let col = ""
            const currentCol = park.map((a, i) => {
                col = col + a[X]
            })
            const nextStep = col.slice(Y- Number(b), Y)
            if (nextStep.includes("X") || Number(Y) - Number(b) < 0) {
              return `X:${X} Y:${Y} dir:${a} how:${b} notMove`
            } else {
                Y = Number(Y) - Number(b)
            }
            return nextStep
        }
        return 
    })
    return [Y,X];
}