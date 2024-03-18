function createCounter(n){
    let counter=n

    function counterFn(){
        return counter++
    }

    return counterFn()
}

  
  // Example usage:

const counter = createCounter(5)

console.log(counter);