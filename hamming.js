const chalk = require('chalk');
const express = require('express');

// Finding first (units) binary digit of the parity code
exports.b1 = function (codeword) {
    const p1 = codeword.charAt(6); console.log(`p1= ` + p1);
    let paritycheck = (codeword.charAt(4) ^ codeword.charAt(2) ^ codeword.charAt(0));
    console.log(chalk.yellow(`XOR of ${codeword.charAt(4)}, ${codeword.charAt(2)}, ${codeword.charAt(0)} should have been: ` + paritycheck + ` and is: ${p1} `));        //xor
    
    return (p1 == paritycheck) ? 0 : 1;
}

// Finding the second digit of the binary parity code
exports.b2 = function (codeword) {
    const p2 = codeword.charAt(5); console.log(`p2= ` + p2);
    let paritycheck = (codeword.charAt(4) ^ codeword.charAt(1) ^ codeword.charAt(0));
    console.log(chalk.yellow(`XOR of ${codeword.charAt(4)}, ${codeword.charAt(1)}, ${codeword.charAt(0)} should have been: ` + paritycheck + ` and is: ${p2} `));        //xor

    return (p2 == paritycheck) ? 0 : 1;
}

// Finding the third digit of the binary parity code
exports.b3 = function (codeword) {
    const p4 = codeword.charAt(3); console.log(`p4= ` + p4);
    let paritycheck = (codeword.charAt(2) ^ codeword.charAt(1) ^ codeword.charAt(0));
    console.log(chalk.yellow(`XOR of ${codeword.charAt(2)}, ${codeword.charAt(1)}, ${codeword.charAt(0)} should have been: ` + paritycheck + ` and is: ${p4} `));        //xor
    
    return (p4 == paritycheck) ? 0 : 1;
}