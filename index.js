const { inverse } = require('chalk');
const chalk = require('chalk');
const express = require('express');
const hamming = require('./hamming');

const app = express();

// GET method route
app.get('/:id', function (req, res) {

    const codeword = req.params.id;
    console.log(codeword);

    //Terminate if codeword is not 7 bits
    if (codeword.length !== 7) { return res.status(400).end('The length of the codeword must be 7!. Please retry'); }
    
    var z1 = hamming.b1(codeword);
    var z2 = hamming.b2(codeword);
    var z3 = hamming.b3(codeword);
    console.log(chalk.magenta(`z1= ${z1}`));
    console.log(chalk.magenta(`z2= ${z2}`));
    console.log(chalk.magenta(`z3= ${z3}`));

    z = z1 + z2 * 10 + z3 * 100;
    const pos = parseInt(z, 2);
    console.log(`the position of error is: ` + chalk.magentaBright(pos));

    var correctcode = codeword;
    console.log(chalk.blue.inverse(correctcode.charAt(7 - pos)));

    swapper = correctcode.charAt(7 - pos) == 0 ? 1 : 0;
    correctcode = correctcode.substring(0, 7 - pos).concat(swapper).concat(correctcode.substring(7 - pos + 1));

    console.log(`Corrected Code : ` + chalk.green(correctcode));
    res.status(202).send(`Given codeword: ${codeword} <br/>The position of error is bit no: ${pos} <br/>Corrected Code: ${correctcode}`);
});

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(chalk.green.bold(`Listening on port ${port}... `)));