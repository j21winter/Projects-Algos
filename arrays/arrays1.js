//! PUSH TO FRONT
let arr = [1,2,2,2,3,4,5,5,6,7,7,7,7]

console.log(arr.slice(4,6))

// note First option (long form)
// function pushToFront (arr, num) {
//     for(let i = arr.length-1; i>=0; i--){
//         arr[i+1] = arr[i]
//     }
//     arr[0] = num
//     return arr
// }

// note Second option (short hand)
// function pushToFront (arr, num){
//     arr = [num, ...arr]
//     return arr
// }

// console.log(pushToFront(arr, 10))

//! POP FRONT
// note First option
// function popFront(arr) {
//     let removed = arr[0]
//     arr =  arr.slice(1)
//     console.log(arr)
//     return removed
// }

// note Second Option ( long form)
// function popFront (arr) {
//     let removed = arr[0]
//     console.log(arr)
//     for(let i = 1; i < arr.length; i++){
//         arr [i-1] = arr[i]
//         console.log(arr)
//     }
//     arr.length = arr.length - 1
//     console.log(arr)
//     return removed
// }

// note Third option (short hand)
// function popFront(arr){
//     let removed = arr.shift()
//     console.log(arr)
//     return removed
// }

// console.log(popFront(arr))

// ! INSERT AT
// note First Option (short hand)
// function insertAt(arr, value, index) {
//     return [...arr.slice(0, index),value,...arr.slice(index)]
// }

// note Second Option (long form loop)
// function insertAt(arr, value, index){
//     for( let i = arr.length-1; i >= index; i--) {
//         arr[i+1] = arr[i]
//     }
//     arr[index] = value
//     return arr
// }

// console.log(insertAt(arr, 100, 3))

// ! REMOVE AT
// note First Option (long form)
// function removeAt (arr, index){
//     let removed = arr[index]
//     for( let i = index; i < arr.length; i++){
//         arr[i] = arr[i+1]
//     }
//     arr.length = arr.length-1
//     console.log(arr)
//     return removed
// }

// note Second Option (short hand)
// function removeAt (arr, index){
//     const removed = arr.splice(index, 1)[0]
//     console.log(arr)
//     return removed
// }

// console.log(removeAt(arr, 3))

// ! SWAP PAIRS
// function swapPairs(arr){
    
//     for( let i = 0; i < arr.length-1; i += 2){
//         let temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//     }
//     return arr
// }

// console.log(swapPairs(arr))

// ! REMOVE DUPLICATES
// function removeDuplicates(sortedArr){
//     let i = 0

//     while (i < sortedArr.length - 1) {
//         if(sortedArr[i] === sortedArr[i+1]){
//             sortedArr.splice(i+1, 1)
//         } else {
//             i++
//         }
//     }
//     return sortedArr
// }

// console.log(removeDuplicates(arr))