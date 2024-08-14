// console.log(process)
// console.log(process.argv[3])

// const fs = require('fs');
// const input  = process.argv;
// // fs.writeFileSync(input[2],input[3]);

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }else if (input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }else{
//     console.log('invalid input')
// }

const fs = require('fs');
const input = process.argv;

try {
    if (input[2] == 'add') {
        fs.writeFileSync(input[3], input[4]);
        console.log('File created successfully.');
    } else if (input[2] == 'remove') {
        fs.unlinkSync(input[3]);
        console.log('File removed successfully.');
    } else {
        console.log('Invalid input');
    }
} catch (error) {
    console.error('An error occurred:', error.message);
}
