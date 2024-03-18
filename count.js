// find duplicate elements


const findDuplicate=()=>
{const arr=[3,1,3,4,5,6,3,4,4,10,15]


const duplicatedElements= arr.filter((val, index, arr)=>arr.indexOf(val) !==index)


console.log(duplicatedElements);
}

// get the count of duplicate values


function getCountDuplicate(){
    const months = ['May', 'Feb', 'Jan', 'Dec', 'May', 'Mar', 'May']
    const countDuplicates = months.reduce((obj, month)=>
    {
        if(obj[month]=undefined){

       obj[month]=1
        return obj
        }
        else
        {
            obj[month]++
            return obj
        }
    },{})

    console.log(countDuplicates);

}

// getCountDuplicate()


// sort number array
function sortNumberArray(){
    const arr =[10,12,32,1,4,45,12,213,56]

    arr.sort((a,b)=>{
        return a-b
    })

    console.log(arr);
}

sortNumberArray()

// sorrt array of strings

const sortArrayStrings=()=>{
    const arr = ['Feb', 'Jun', 'Aug', 'Nov']

    console.log(arr.sort());
}
sortArrayStrings()

// find unique values
const uniqueNumbers =()=>{
    const ids = [21,21,3,4,64,6,3,43,2]

    const uniques = ids.filter((el, index,arr)=> {
        return arr.indexOf(el)==index
    })
    uniques.sort((a,b)=>{return a-b})


    console.log(uniques);

}
uniqueNumbers()

// find and return max value inn an array
function maxValue()
{
    const arr = [3,56,3,23,43,4,65,65,323,43,22]

  function findMax(arr){

     return arr.reduce((prev,cur)=>{
            return prev<cur? prev:cur
        })
  }  

  console.log(findMax(arr))

}
maxValue()  


// return speccified data    
    
// return minimum value 
function minValue(){
    const arr=  [2,3,50,21,222,43,55]

    const minVal = arr.reduce(function(a,b){ return a<b?a:b})
    console.log(minVal, "dcskdsc");

}
minValue()
// find average of a certian data
function findAverage(){

    const arr=  [2,3,50,21,222,43,55]

    const totalSum= arr.reduce((a,b)=> a+b)

    console.log(totalSum,  "sum");


const avg= totalSum/arr.length
console.log(avg, "average");
}
findAverage()

// return data with uppercase string
const stringUppercase=()=>{
    const stringArr=['cow', 'goat', 'Sheep']

    console.log(stringArr, "arr");
    // for (let i = 0; i < stringArr.length; i++) {
    //     const element = stringArr[i].charAt(0).toUpperCase()+ stringArr.substring(1);

    //     console.log(element);
        
    // }

    for (let anim of stringArr) {
        const element = anim.charAt(0).toUpperCase()+ anim.substring(1);
        console.log(element);
    }
}
stringUppercase()

// function to check if a string is an anagram of another
function anagramCheck(){
    const string1= 'Army'
    const string2= 'Mary'

    const check=(string1, string2)=>{

        const a= string1.toUpperCase().split("").sort().join("");
        const b= string2.toUpperCase().split("").sort().join("");

        return a===b


    }

    console.log("it is an anagram" ,check(string1,string2));
}
anagramCheck()

function returnJson(){
    const stds=[
        {
          "fname": "John",
          "lname": "Doe",
          "id": "S123456",
          "course": "Computer Science"
        },
        {
          "fname": "Jane",
          "lname": "Smith",
          "id": "S234567",
          "course": "Engineering"
        },
        {
          "fname": "Alice",
          "lname": "Johnson",
          "id": "S345678",
          "course": "Psychology"
        },
        {
          "fname": "Bob",
          "lname": "Williams",
          "id": "S456789",
          "course": "Business Administration"
        },
        {
          "fname": "Emily",
          "lname": "Brown",
          "id": "S567890",
          "course": "Biology"
        }
      ]


//     const newList=  stds.map((el)=>{

//         let newObj ={

//             name:el.fname + " "+ el.lname,
//         course: el.course
//         }
//         return newObj
// })

for (let index = 0; index < stds.length; index++) {
    const el = stds[index];
    let newObj = {
        name: el.fname
    }

    return newObj

    
}

    console.log(newObj);

    //   for(let i =0; i<stds.length; i++)
    //   {
    //     return {

    //        name: stds[i].fname +stds[i].lname,
    //        course: stds[i].course
    //     }
    //     console.log(stds[i].fname)
    //     // console.log(stds[i]);
    //   }
      
}
returnJson()
