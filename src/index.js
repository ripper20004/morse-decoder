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
    let arrMorse = [];

    for (let i = 0; i < expr.length; i += 10) {
        let strMorse = '';

        for (let j = 0; j < 10; j += 2) {
            if (expr[j + i] === "1" && expr[i + j + 1] === "0") {
                strMorse += '.'
            } else if (expr[j + i] === "1" && expr[j + i + 1] === "1") {
                strMorse += '-'
            } else if (expr[j + i] === "*" && expr[j + i + 1] === "*") {
                strMorse += ' '
                break;
            }
        }

        arrMorse.push(strMorse);
    }

    return arrMorse.map((item) => {
        if (item === " ") return " ";
        return MORSE_TABLE[item];
    }).join("")
}

module.exports = {
    decode
}