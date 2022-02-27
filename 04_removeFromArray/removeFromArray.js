const removeFromArray = function() {
    const myArray = arguments[0];
    // iterating over arguments starting from second
    for (j = 1; j < (arguments.length); j++) {
        // iterating over array elements and commaring to argument
        for (i = 0; i < myArray.length; i++) {
            if (myArray[i] === arguments[j]) {
                myArray.splice(i, 1);
            }
        }
    }
        return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
