const testArray = [1,2,3,4,5,6,7,8,9,10]

// ! REVERSE 
/** Given a numerical array, reverse the order of values, in-place. 
 * The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed.
 *  Working 'in-place' means that you cannot use a second array – move values within the array that you are given. 
 * As always, do not use built-in array functions such as splice().
 **/

function reverseInPlace(arr){

    // note OPTION (long hand)
    for( let i = 0; i < arr.length / 2; i++ ){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i] 
        arr[arr.length-1-i] = temp
    }

    return arr;

    // note OPTION (short hand)
    // return arr.reverse()

}

// console.log(reverseInPlace(testArray))


//! ROTATE 
/**Implement rotateArr(arr, shiftBy) that accepts array and offset.
 *  Shift arr's values to the right by that amount. 
 * 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. 
 * Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. 
 * Don't use built-in functions.
 * Second: allow negative shiftBy (shift L, not R).
 * Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
 * Fourth: minimize the touches of each element. */
function rotateArr(arr, offset) {

    // note Option 1
    // TODO second, third, forth

    // note Option 2(simple)
    let length = arr.length

    for( let i = 1; i <= shiftNum; i++){
        for(let j = length; j >= 0; j--){
            arr[j + 1] = arr[j]
        }
        arr[0] = arr[length]
    }
    arr.length = length
    return arr

    // note OPTION 3 (shortHand)
    // const bumped = arr.slice(arr.length - shiftNum, arr.length)
    // arr.unshift(...bumped)
    // return arr;
}

// console.log(rotateArr(testArray, 3))

// ! FILTER RANGE 
/** 
 * Alan is good at breaking secret codes. 
 * One method is to eliminate values that lie outside of a specific known range. 
 * Given arr and values min and max, retain only the array values between min and max. 
 * Work in-place: return the array you are given, with values in original order. 
 * No built-in array functions.
 */

function filterRange(arr, min, max){
    let currentIndex = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= min && arr[i] <= max){
            arr[currentIndex] = arr[i]
            currentIndex++
        }
    }

    arr.length = currentIndex
    return arr
}

// console.log(filterRange(testArray, 1, 2))

// ! CONCAT 
/** 
 * Replicate JavaScript's concat().
 * Create a standalone function that accepts two arrays.
 *  Return a new array containing the first array's elements,
 *  followed by the second array's elements. 
 * Do not alter the original arrays. 
 * Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
 */

function concat(arr1, arr2){
    return [...arr1, ...arr2]
}

console.log(concat(['a', 'b'], [4,5,6]))