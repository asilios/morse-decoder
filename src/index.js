const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arrItem = [];
    let char = '';
    Array.from(expr).map((item, index) => {
        const indexChar = index + 1;
        if (indexChar % 10 === 0) {
            char += item;
            arrItem.push(char);
            char = '';
        } else {
            char += item;
        };
    });
    let word = '';
    let spliceNum = [];
    let result = [];
    arrItem.map((item) => { 
        for (let i = 0; i < item.length; i += 2) {
            spliceNum.push(item[i] + item[i + 1]);
            if (i === 8 && item === '**********') {
                word += ' ';
            } else if (i === 8) {
                spliceNum.find((findItem) =>  {
                    if (findItem === '10') {
                        result.push('.')
                    } else if (findItem === '11') {
                        result.push('-');
                    };
                });
                word += MORSE_TABLE[result.join('')];
                spliceNum = [];
                result = []; 
            };
        };
    });
    return word;
};


module.exports = {
    decode
}
