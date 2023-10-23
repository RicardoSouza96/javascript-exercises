const repeatString = function(frase, repetitions) {
    if(repetitions < 0)
        return 'ERROR';
    let result = '';
    for(let i = 0; i < repetitions; i++) {
        result += frase;
    }
    return result;
};

const frase = 'hey';
const repetitions = 3;
repeatString(frase, repetitions);

// Do not edit below this line
module.exports = repeatString;
