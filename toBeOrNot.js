function expect(val){
    return {
        toBe: function(value){
            if(value===val){
                return "Equal"
            }
            else{
                return "Not equal"
            }
        },
        notToBe: function(value){
            if(value!==val){
                return "Not Equal"
            }
            else{
                return "Equal"
            }

        }
    }
}

try {
    expect(5).toBe(6); // true
    console.error(expect(5).toBe(6));
    console.log(expect(5).notToBe(12)); // false, throws "Equal"
} catch (error) {
    console.error(error.message);
}
