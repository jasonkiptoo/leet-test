var mergeAlternately = function(word1, word2) {


let merged =''

const maxArray= Math.max(word1.length, word2.length)

console.log( Math.max(2,4));


    // console.log("ckshdcjks",word1.split(''), word2);

    for( let i=0;i< maxArray; i++){

        if(i<word1.length)
        {

             merged += word1[i]
        }
        if(i<word2.length)
        {

             merged += word2[i]
        }
        console.log("Dsdsds",merged);

    }
    return merged




    
};


mergeAlternately(word1="abc", word1="pqr")