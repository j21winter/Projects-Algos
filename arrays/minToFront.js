const arr = [7,3,7,4,8,9,2,5,6,1,0,1,2]

function minToFront(arr) {
    let lowNum = arr[0]
    let lowIndex = 0

    for( let i = 0; i < arr.length; i++){
        // find the lowest number
        if(arr[ i ] < lowNum){
            lowNum = arr[i]
            lowIndex = i
        }
    }

        // note OPTION 1 keep the order the same
    // Move all numbers up one
    for( let i = lowIndex; i > 0; i--){
        arr[i] = arr[i - 1]
    }
    // Set the first number
    arr[0] = lowNum

        // note OPTION 2 swap the first and the low number
    // Swap numbers 
    arr[lowIndex] = arr[0]
    arr[0] = lowNum

    return arr
}

console.log(minToFront(arr))