const { log } = require('console');
const fs = require('fs');

// create file
// fs.writeFile('read.txt','aysn method to write a file', 
// (error)=> {
//     console.log("File is created");
//     console.log(error);
// });

// when we pass a function as an argument its called callback -> that gets  called when that task completes.  The Callback has an argument that tells you wheather the operation completed successfully.  Now we need to say what to do when fs.writeFile has completed ( even if it's nothing ), and start checking for errors

// append in asyn
// fs.appendFile("read.txt", " appneding data ",
// (err)=>{
//     console.log("file appnded");
// })

// Reading the file
// fs.readFile("read.txt","utf-8",(err, data /*response*/)=>{
//     console.log(data);
//     console.log(err);
// })