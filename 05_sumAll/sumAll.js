const sumAll = function(val1, val2) {
    let sum = 0;
    if(!Number.isInteger(val1) || !Number.isInteger(val2))
        return "ERROR";
    if(val1 < 0 || val2 < 0)
        return "ERROR";
    if(val1 < val2) {
        for(; val1 <= val2; val1++) {
            sum += val1;
        }
        return sum;
    }
    if(val2 < val1) {
        for(; val2 <= val1; val2++) {
            sum += val2;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
