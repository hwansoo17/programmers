function solution(triangle) {
    var answer = 0;
    let dp = triangle
    console.log(dp)
    for (let i = dp.length-2; i >= 0; i--) { // 마지막 행은 어차피 더해지므로 계산필요 X
        // console.log(dp[i]) 
        for(let j = 0; j <= dp[i].length - 1; j++) { // 다 돌아야함
            // console.log(dp[i][j])
            dp[i][j] = dp[i][j] + Math.max(dp[i+1][j], dp[i+1][j+1])
            // console.log(dp[i][j])
        }
    }
    //  8  1  0          3  8          7 
    // 7 12 10 10  =>  20 13 10  =>  23 21 
    return dp[0][0];
}