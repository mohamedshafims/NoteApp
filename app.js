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
    var note = notes.addNote(title,body);
    if(note)
    {
        console.log("Note created");
        console.log("---");
        console.log("Title : "+note.title);
        console.log("Body : "+note.body);
    }
    else{
        console.log("Note already taken");
    }
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
 var result = notes.getNote(title);
 var message = result !== undefined ? result : "Note not found";   
 console.log(message);
}else if(command === 'remove'){
    var result = notes.removeNote(title);
    var message = result ? "Note was removed" : "Note not found";
    console.log(message);
}else{
    console.log("Check your command");
}
console.log(process.argv[3]);

