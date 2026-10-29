/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const foundIndices=[];
    let key,high,low;
    for(let i=1;i<nums.length;i++){
        key=nums[i];
        low=0; 
        high=i-1;
        while(low<=high){
             let mid=Math.floor((high+low)/2);
             if(key<nums[mid])
              high=mid-1;
            else
              low=mid+1;
        }
        for(let j=i-1;j>=low;j--){
            nums[j+1]=nums[j]
        }
        nums[low]=key;
    }

    for(let i=0;i<nums.length;i++){
        if(nums[i]===target)
          foundIndices.push(i);
    }
    return foundIndices;
};