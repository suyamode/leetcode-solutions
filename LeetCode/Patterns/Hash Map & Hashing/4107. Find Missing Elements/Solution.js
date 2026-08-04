/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let sorted=nums.sort((a,b)=>a-b);
    let numbers=[];
    for(let i=0;i<=sorted.length;i++){
        if(sorted[i+1]-sorted[i]>1){
            for(let j=sorted[i];j<sorted[i+1]-1;j++)
              numbers.push(j+1);
        }
    }

    return numbers;
};