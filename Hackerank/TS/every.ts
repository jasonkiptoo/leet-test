function isEven(item){
    return item % 2 == 0
}

let arr: Array<number>=[1,4,7,9]


console.log(arr.every(isEven))

// return true