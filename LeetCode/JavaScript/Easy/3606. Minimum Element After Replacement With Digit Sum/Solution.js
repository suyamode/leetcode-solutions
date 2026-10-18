 function findMinDigitSum(nums) {
    let minSum = Infinity;

    for (let num of nums) {
        let sum = 0;
        let n = Math.abs(num);  
         
        if (n === 0) {
            sum = 0;
        } else {
            while (n > 0) {
                sum += n % 10;
                n = Math.floor(n / 10);
            }
        }

        
        if (sum < minSum) {
            minSum = sum;
        }
    }

    return minSum;
}