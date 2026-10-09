/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    const num=Array.from(String(n),Number);
    const digitSum=num.reduce((acc,curr)=>acc+curr,0);
    const digitProduct=num.reduce((acc,curr)=>acc*curr,1)
    if(n%(digitSum+digitProduct)===0)
    return true;
    return false;
    
};