const reverseString = function(string) {
    characters = []
    for (i = 0; i < string.length; i++) {
        characters += string[i];
    }
    newString = '';
    for (i = (string.length-1); i >= 0; i--) {
        newString += characters[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
