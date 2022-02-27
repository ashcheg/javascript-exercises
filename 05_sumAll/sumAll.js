const sumAll = function(arg1, arg2) {
    if (!(typeof arg1 === 'number') || 
    !(typeof arg2 === 'number') || 
    (arg1 < 0) || (arg2 < 0)) {
        return 'ERROR'
    }
    let int1 = Math.min(arg1, arg2);
    let int2 = Math.max(arg1, arg2);

    let arrOfNumbers = []
    for (i = int1; i <= int2; i++) {
        arrOfNumbers.push(i);
    }
    let sum = 0;
    for (i = 0; i < arrOfNumbers.length; i++) {
        sum += arrOfNumbers[i];
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
