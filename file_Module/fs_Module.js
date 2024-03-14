// CURD operation in File

const { log } = require('console');
const fs = require('fs');

// 1. Create a folder named Deepak
// fs.mkdirSync("Deepak");

// create file
// fs.writeFileSync("Deepak/Deepak.txt","Mty name is Deepak"); //it override the previous data

// add more data at the end
// fs.appendFileSync('Deepak/Deepak.txt'," appending the data");

// read file data
// const buf_data = fs.readFileSync('Deepak/Deepak.txt');
// console.log(buf_data);
// const org_data = buf_data.toString()
// console.log(org_data);
        // Or
// const data = fs.readFileSync('Deepak/Deepak.txt' , 'utf-8');//uft-8 is file encoding
// console.log(data);


// Rename the file
// fs.renameSync('Deepak/Deepak.txt','Deepak/MyBio.txt')

// Deleting file
// fs.unlinkSync('Deepak/MyBio.txt')

// Folder delete
// fs.rmdirSync('Deepak');

