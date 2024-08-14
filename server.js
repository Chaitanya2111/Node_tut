const http =  require('http')

// const data = (req,resp)=>{
//     resp.write('<h1>Hey Chaitanya</h1>');
// resp.end();
// }



// http.createServer(data).listen
//     (4500)


http.createServer((req,resp)=>{
resp.write('<h1>Hello Chaitanya</h1>');
resp.end();
}).listen
(4500)