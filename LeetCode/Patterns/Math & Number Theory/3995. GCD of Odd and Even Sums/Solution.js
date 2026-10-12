/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let sumOdd=n**2;
    let sumEven=n*(n+1);
    while(sumEven>0){
        let rem=sumOdd%sumEven;
        let temp=sumEven
        sumEven=rem;
        sumOdd=temp;
    }
    return sumOdd
    
};