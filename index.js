const app = require('./app')
const colors = require('colors')




console.log('Chaitanya'.red)
console.log('Chaitanya'.bgGreen)
var a = 20;
var b = 20;
var c= 20;

// console.log(a+b+c);


// let  y =20;
let  y ='20';

if(y===20){
    console.log('matched')
}


for(i=0; i <=20; i++){
    console.log(i)
}


var arr = [1,2,3,7,9,0,8,4,5,6];
console.log(arr);
console.log(arr[3]);

console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z());


const cr = [20,3,4,6,7,3,0];

cr.filter((item)=>{
    console.log(item)
})

let result = cr.filter((item)=>{
  return item === 3
})

console.log(result)



let res = cr.filter((item)=>{
    return item>3
  })
  
  console.log(res)