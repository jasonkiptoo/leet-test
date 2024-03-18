var findDifference = function(nums1, nums2) {
nums1=[1,2,3]
nums2 =
[2,4,6]

arr=[]
arr1=[]




for (var i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i]) && !arr.includes(nums1[i])) {
        console.log(nums1[i]);
        arr.push(nums1[i]);
    }
}
for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i]) && !arr.includes(nums2[i])) {
        console.log(nums2[i]);
        arr1.push(nums2[i]);
    }
}

console.log("final 1", [arr,arr1]);
    
};


findDifference();