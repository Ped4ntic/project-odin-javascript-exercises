const removeFromArray = function(arr, ...remItems) {
    return arr.filter(item => !remItems.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
