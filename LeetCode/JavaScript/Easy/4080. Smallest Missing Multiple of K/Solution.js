  var missingMultiple = function(nums, k) {
    const numSet = new Set(nums);
    
    let currentMultiple = k;
    
     
    while (true) {
                if (!numSet.has(currentMultiple)) {
            return currentMultiple;
        }
        
        currentMultiple += k;
    }
};

 