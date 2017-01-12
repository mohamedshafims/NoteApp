console.log("starting app");

const fs = require('fs');
const os = require('os');
const lodash = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// var command = process.argv[2];
var command = yargs.argv._[0];

var title = yargs.argv.title;
var body = yargs.argv.body;

if(command === 'add'){
    notes.addNote(title,body);
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
 notes.getNote(title);   
}else if(command === 'remove'){
    notes.removeNote(title);
}else{
    console.log("Check your command");
}
console.log(process.argv[3]);

