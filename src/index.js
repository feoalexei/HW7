let inputString = prompt('Enter the original string:');
let inputStrLength;

do { 
    inputStrLength = +prompt('Enter the string length you need:', 0);
} while (isNaN(inputStrLength));

let inputSymbol = prompt('Enter the symbol to fill the string:');
let inputFlag = prompt('Enter the side where the string should be filled (\'start\' or \'end\')');
   
function padString(string, targetLength, symbol, flag = 'end') {
    let symbolString = '';
    let newString;
            
    for (let i = 0; i < (targetLength - string.length); i++) {
        symbolString += symbol;
    }
        
    if (string.length < targetLength) {
        if (flag === 'end') {
            newString = string + symbolString.slice(0, targetLength - string.length);
        } else if (flag === 'start') {
            newString = symbolString.slice(-(targetLength - string.length)) + string;
        } else {
            alert('You should set correctly the side of filling (only \'start\' or \'end\')');
            return string;
        }
        return newString;
    } else {
        return string;
    }
}
        
result = padString(inputString, inputStrLength, inputSymbol, inputFlag);
console.log(result);