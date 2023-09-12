const findTheOldest = function(arr) {
    return arr.reduce((a, b) => {
        const currentDate = new Date();
        const cur = (a.yearOfDeath || currentDate.getFullYear()) - a.yearOfBirth;
        const pre = (b.yearOfDeath || currentDate.getFullYear()) - b.yearOfBirth;
        return cur > pre ? a : b;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
