const repeatString = function(str, rep) {
    let newStr =""
    if(rep < 0){
        newStr = "ERROR";
    }
    else if(rep > 0){               
        for(let i = 0; i < rep; i++){
            newStr += str;
        }
    }

    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
