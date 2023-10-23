const reverseString = function(word) {
    const len = word.length;
    let reversed = '';
    for(let i = len; i >= 0; i--) {
        let char = word.charAt(i);
        reversed += char;
    }
    return reversed;
};

const word = 'hello';
reverseString(word);

// Do not edit below this line
module.exports = reverseString;
