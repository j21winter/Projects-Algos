
// Shuffle
// In JavaScript, the Array object has numerous useful methods. 
// It does not, however, contain a method that will randomize the order of an array’s elements. 
// Let’s create shuffle(arr), to efficiently shuffle a given array’s values. 
// Work in-place, naturally. Do you need to return anything from your function?

function shuffle(arr){
    let cycles = Math.floor(Math.random() * (arr.length - 1) + 1)

    while (cycles > 0){
        for(let i = 0; i < arr.length; i++){
            let randomIndex = Math.floor(Math.random() * (arr.length))
            // Swap
            let temp = arr[i]
            arr [i] = arr[randomIndex]
            arr[randomIndex] = temp
            // decrement cycles
        }
        cycles --
        console.log(cycles)
    }

    return arr
}

// console.log(shuffle([1,2,3,4,5,6,7,8,9]))


// Remove Range
// Given array, and indices start and end, remove vals in that index range, 
// working in-place (hence shortening the array). 
// Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

function removeRange(arr,start, end){
    let currentIndex = 0

    for( let i = 0; i < arr.length; i++){
        if(i < start || i > end){
            temp = arr[currentIndex]
            arr[currentIndex] = arr[i]
            arr[i] = temp

            currentIndex++
        }
    }
    arr.length = currentIndex

    return arr
}

// console.log(removeRange([20,30,40,50,60,70],2,4))



// Intermediate Sums
// You will be given an array of numbers.
// After every tenth element, add an additional element containing the sum of those ten values. 
// If the array does not end aligned evenly with ten elements, 
// add one last sum that includes those last elements not yet been included in one of the earlier sums. 
// Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6]

function intermediateSums(arr){
    let sum = 0
    let count = 0
    for ( let i = 0; i < arr.length; i++){
        sum += arr[i]
        count ++

        if(count % 10 === 0 && count > 1){
            upShift(arr, i, sum)
            sum = 0
            i++
        }
    }

    if(sum != 0){
        arr[arr.length] = sum
    }

    return arr
}

function upShift(arr, index, sum){
    for( let i = arr.length-1; i > index; i--){
        arr[i + 1] = arr[i]
    }
    arr[index + 1] = sum
    return arr
}

// console.log(intermediateSums([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9]))

// Double Trouble
// Create a function that changes a given array to list each original element twice, retaining original order. 
// Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].

function doubleTrouble(arr){

    let pointer = 0
    
    while(pointer < arr.length){
        // loop to bump indexs down 1 index
        for(let i = arr.length - 1; i > pointer; i--){
            arr[i+1] = arr[i]
        }
        // place the duplicate
        arr[pointer + 1] = arr[pointer]
        // increment our pointer
        pointer += 2
    }

    return arr
}

// doubleTrouble([1,2,3,4,5])


// Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array,\
// at alternating indices starting with first array. 
// Extra values from either array should be included afterward. 
// Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

function zipIt(arr1, arr2){
    let newArray = []
    let longest, shortest;

    if(arr1.length - arr2.length < 0){
        shortest = arr1
        longest = arr2
    } else {
        shortest = arr2
        longest = arr1
    }

    for(let i = 0; i < shortest.length; i++){
        newArray.push(arr1[i], arr2[i])
    }
    let remaining = longest.length - shortest.length;

    for(let j = longest.length - remaining; j < longest.length; j++ ){
        newArray.push(longest[j])
    }

    return newArray
}

// console.log(zipIt([100, 200, 300, 400, 500, 1,2,3,4,5,6,7,7], [10,20,30,40]))

// Second: combine the two arrays’ values into the first array, instead of into a new array.
function zipIt2(arr1, arr2){
    let longest, shortest;
    
    if(arr1.length - arr2.length < 0){
        shortest = arr1
        longest = arr2
    } else {
        shortest = arr2
        longest = arr1
    }

    let cycles = shortest.length
    let remaining = longest.length - cycles;
    let arr2Index = 0

    for(let arr1Index = 0; arr2Index < cycles; arr1Index += 2){
        // bump up
        for(let j = arr1.length - 1; j > arr1Index; j--){
            arr1[j+1] = arr1[j]
        }
        console.log('combining ' + arr2[arr2Index] + ' at arr1 index ' +( arr1Index + 1))
        arr1[ arr1Index + 1] = arr2[arr2Index]
        arr2Index ++
    }

    for(let j = longest.length - remaining; j < longest.length; j++ ){
        arr1.push(longest[j])
    }

    return arr1
}

console.log(zipIt2([10,20,30,40], [100, 200, 300, 400, 500, 1,2,3,4,5,6,7,7], ))