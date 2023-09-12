const palindromes = function (s) {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return str.split("").reverse().join("") === str;
};

// Do not edit below this line
module.exports = palindromes;
