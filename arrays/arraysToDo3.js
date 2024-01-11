// ! Remove Negatives

function removeNegatives(arr){
    currentIndex = 0 // index to place numbers 

    for( let i = 0; i < arr.length; i++){ 
        if(arr[ i ] >= 0){
            // Swap values
            let temp = arr[ currentIndex ]
            arr[ currentIndex ] = arr[i]
            arr[ i ] = temp
            currentIndex ++
        }
    }
    // cut down arr to front values only. 
    arr.length = currentIndex

    return arr
}

// console.log(removeNegatives([2, -5, 8, -3, 0, 7, -1, 4, -6]))

// ! Return second to last value

function returnPenultimate(arr){
    if(arr.length < 2){
        return null
    } else {
        return arr[ arr.length - 2 ]
    }
}

// console.log(returnPenultimate([2]))


//! Return Second largest

function secondLargest(arr){
    if(arr.length < 2){
        return null
    }

    let largest = arr[0]
    let secondLargest = arr[0]

    for( let i = 1; i < arr.length; i++){
        if(typeof(arr[i]) == 'number'){
            if( arr [i] > largest){
                secondLargest = largest
                largest = arr[i]
            } else if (arr[i] > secondLargest){
                secondLargest = arr[i]
            }
        }
    }

    if(typeof(secondLargest) == 'string'){
        return null
    }

    return secondLargest
}

// console.log(secondLargest([1,2,3,4,5]))

// ! Return nth to last
function nthToLast(arr, endOffset){
    if(arr.length < endOffset){
        return null
    }

    return arr[ arr.length - endOffset]
}

// console.log(nthToLast([1,2,3,4,5],4))

// ! return nth largest

function nthLargest(arr, n){
    if(arr.length < n){
        return n
    }

    // sort the array (QUICKSORT)

    
    // return array[arr.length - n]
    
}

// ! Skyline Heights

function skylineHeights(arr){
    // only see positive numbers
    // only see if current number is larger than previous number. 

    // compare current to previous

    // check that array.length > 0
    if(arr.length < 0){
        return null
    }

    let newArray = []
    let prevNum = 0
    // loop over array
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0 && arr[i] > prevNum){
            newArray[newArray.length] = arr[i]
            prevNum = arr[i]
        }
    }

    return newArray
}

console.log(skylineHeights([2, -5, 8, -3, 0, 7,, 10 -1, 4, -6, 18]))