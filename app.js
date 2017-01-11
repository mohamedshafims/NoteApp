console.log("starting app");

const fs = require('fs');
const os = require('os');

var command = process.argv[2];

if(command === 'add'){
    console.log("Added new note");
}else if(command === 'list'){
    console.log("list of notes are as follows");
}else if(command === 'read'){
 console.log("reading note");   
}else if(command === 'remove'){
    console.log("removing note");
}else{
    console.log("Check your command");
}
console.log(process.argv[3]);

