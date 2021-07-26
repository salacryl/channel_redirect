// A dependency-free, await-ready function for Node.js
// to get user input in the console
// Author: Marc Backes (@themarcba

var fs = require('fs');
const getInput = (query, inStream, outStream) => {
    return new Promise((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: inStream,
            output: outStream,
        })
        readline.question(`${query} `, answer => {
            readline.close()
            resolve(answer)
        })
    })
}

const run = async () => {
    const filename = __dirname+"\\test.txt";
    const writeStream = fs.createWriteStream(filename)
    const name = await getInput(`What is your name?`, process.stdin, writeStream )
    writeStream.write(name)
    writeStream.close
}

run()


