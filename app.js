
const fs = require('fs');
const os = require('os');
const lodash = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// var command = process.argv[2];
var title = {
    describe : 'Title of the note',
    demand : true,
    alias : 't'
};
var body = {
    describe : 'Body of the Note',
    demand : true,
    alias : 'b'
};
var argv = yargs
.command('add','add a note',{
    title,
    body
})
.command('list','list all note')
.command('read','read a note',{
    title
})
.command('remove','remove a note',{
    title
})
.argv;
var command = argv._[0];

var title = argv.title;
var body = argv.body;

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
    var allnotes = notes.getAll();
    allnotes.forEach((note) => notes.log(note));
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

