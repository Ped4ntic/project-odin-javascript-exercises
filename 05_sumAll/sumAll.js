const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    
    var ret = 0;
    for(min; min <= max; min++)
    {
        ret += min;
    }
    return ret;

};

// Do not edit below this line
module.exports = sumAll;
