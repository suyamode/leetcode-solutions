/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    let found=false;
    let i=n;
    while(!found){
        let arr= Array.from(String(i), Number)
        if(arr.reduce((acc,curr)=>acc*curr)%t===0)
        found=true;
        else
        i++;
    }
    return i;
};