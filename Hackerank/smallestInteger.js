// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
//   var  A = [1, 3, 6, 4, 1, 2]
    // Implement your solution here
A=A.filter(num=>num>0)
if(A.length===0){
    return 1
}
A.sort((a,b)=>a-b)
for(let i=0; i<A.length;i++)
{
    if(A[i] !== i+1){
        return i+1
    }

    return A[A.length-1]+1
}

   
    
}

solution()
