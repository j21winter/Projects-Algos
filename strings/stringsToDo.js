//! Remove Blanks

function removeBlanks(string){
    string = string.split(" ").join('')

    return string
}

// console.log(removeBlanks('My Name is Jonny!'))

// ! Get Digits

function getDigits(string){
    string = string.split('')
    console.log(string)

    let counter = 0

    for( let i = 0; i < string.length; i++){
        if(Number(string[i])){
            let temp = string[counter]
            string[counter] = string[i]
            string[i] = temp
            counter ++
        }
    }

    string.length = counter
    string = string.join('')

    return string
}

// console.log(getDigits('1h23h4gv4j3b2n23ojb4h2!@#$ee@$%'))

//! Acronyms

function acronyms(string){
    string = string.split(' ')
    acronym = ''
    for( let i = 0; i < string.length; i++){
        if(string[i].length > 0 && !Number(string[i][0])){
            word = string[i]
            letter = word.split('')[0]
            acronym += letter.toUpperCase()
        }
    }
    return acronym
}

let test = 'my name is jonny'
// console.log(acronyms(test))

let test1 = 'BOOP   Boop   boop   $'
// console.log(acronyms(test1))

// ! Count non-spaces

function characterCount(string){
    string = string.split(' ')
    let sum = 0
    for(let i = 0; i < string.length; i++){
        if(string[i].length > 0){
            sum += string[i].length
        }
    }
    return sum
}

// console.log(characterCount('My name is  Jonny'))
// console.log(characterCount(''))

// !Remove Shorter Strings

function removeShorterStrings(arr, minLength){
    let count = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= minLength){
            let temp = arr[count]
            arr[count] = arr[i]
            arr[i] = temp

            count ++
        }
    }
    arr.length = count
    return arr
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))