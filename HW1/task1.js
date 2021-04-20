// task 1.1
// process.stdin.on("data", (data) => {
//     process.stdout.write(`${reverseData(data.toString().trim())}\n\n\n`)
// });
//
// function reverseData(data){
//     return data.split('').reverse().join('')
// }


// task 1.2
const fs = require('fs');
const csv = require('csvtojson');
const csvFilePath='./cvs/cvs.csv'
const writeStream = fs.createWriteStream("./myFile.txt", 'UTF-8');

csv().fromFile(csvFilePath).then((jsonArr) => {
    jsonArr.map((item) => {
        writeStream.write(`${JSON.stringify(item)}\n\n\n`)
    })

},function(err){
    console.error(err);
})



