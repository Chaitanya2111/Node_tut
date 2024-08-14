// const fs = require('fs');
// fs.writeFileSync('hey.txt','Chaitanya Raut')
// fs.writeFileSync('hello.txt','Chaitanya Raut')

console.log(__dirname);
console.log(__filename)

const fs = require('fs').writeFileSync;
fs('code.txt','here is my code........');

const cr = require('fs').writeFileSync;
cr('Abc.txt',"You can give any variable name for fs require")