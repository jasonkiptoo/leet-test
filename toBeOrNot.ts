type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

// function expect(val: any): ToBeOrNotToBe {
//     return {
//         toBe: function(value: St) {
//             if (val !== value) {
//                 return "Not Equal";
//             }
//             return true;
//         },
//         notToBe: function(value: any) {
//             if (val === value) {
//                 return false;
//             }
//             return true;
//         }
//     };
// }

// Example usage:
try {
    expect(5).toBe(5); // true
    expect(5).notToBe(5); // false, throws "Equal"
} catch (error) {
    console.error(error.message);
}
