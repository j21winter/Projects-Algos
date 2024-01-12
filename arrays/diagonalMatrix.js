
function diagonalDifference(arr){
    let size = arr.length

    let sum1 = 0
    let sum2 = 0

    // note loop and sum each set of values
    for(let i = 0; i < size; i++){
        // console.log(arr[i][i-1])
        // console.log(arr[i][size - i])
        sum1 += arr[i][i]
        sum2 += arr[i][size -1 - i]
    }

    // console.log(sum1, sum2)
    //note  double check returned value is positive
    let x = sum1 - sum2
    if(x < 0){
        x = x * -1
    }

    return x
}

// note square matrix
const testArray = [
    [10,2,3],
    [4,50,6],
    [12,8,90]
]

console.log(diagonalDifference(testArray))